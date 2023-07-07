import { useForm, SubmitHandler } from "react-hook-form"
import { addMarker } from "../reducers/markersReducer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import axios from 'axios';
import { BeatLoader } from "react-spinners";

interface IFormInput {
    name: string,
    adress: string,
    title: TitleEnum,
    descriptions: DescriptionEnum
}
enum TitleEnum {
    id = "id",
    name = "name"
}
enum DescriptionEnum {
    id = "id",
    name = "name"
}

export default function Form({ changeVisibleSidebar }) {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const [isLoad, setIsLoad] = useState(false)
    const markers = useSelector((state) => state.markers.markers)
    const onSubmit: SubmitHandler<IFormInput> = ({ name, adress, title, descriptions }) => {

        function getRandomArbitrary(min: number, max: number): number {
            return Math.random() * (max - min) + min;
        }

        const newMarker = {
            id: Date.now(),
            markerOffset: -15,
            name: name,
            title: title,
            descriptions: descriptions,
            // рандомно ставлю координаты, потому что не нашла способа вытащить координаты по клику
            coordinates: [-getRandomArbitrary(30, 80), -getRandomArbitrary(10, 70)],
            adress: adress
        }
        dispatch(addMarker(newMarker));
        localStorage.setItem("markers", JSON.stringify([...markers, newMarker]));
        changeVisibleSidebar();
    }

    const [titles, setTitles] = useState([]);
    const [descriptions, setDescriptions] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://run.mocky.io/v3/b556e29d-ef79-48c0-b043-fc660b6b8d9e';
        axios.get(apiUrl).then((resp) => {
            setTitles(resp.data.reference.titles);
            setDescriptions(resp.data.reference.descriptions);
        }).catch(error => {
            console.log(error)
        }).finally(function () {
            setIsLoad(true)
        });
    }, [setTitles]);

    return (
        <>
            {isLoad && <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-i">
                    <label>Name</label>
                    <input {...register("name")} />
                </div>
                <div className="form-i">
                    <label>Adress</label>
                    <input {...register("adress", { required: true })} />
                </div>
                {errors.adress && <div className="form-i__error">Заполните поле адреса</div>}
                <div className="form-i">
                    <label>title</label>
                    <select {...register("title")}>
                        {titles.length && titles.map(({ id, name }) => (
                            <option key={id} value={name}>{name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-i">
                    <label>descriptions</label>
                    <select {...register("descriptions")}>
                        {descriptions.length && descriptions.map(({ id, name }) => (
                            <option key={id} value={name}>{name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-i">
                    <input type="submit" value="Создать метку"/>
                </div>
            </form>
            }
            <div className="loater">
                {!isLoad && <BeatLoader color="#36d7b7" />}
            </div>
        </>


    )
}