import { useDispatch, useSelector } from 'react-redux';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "react-simple-maps";
import { changeVisibleInfo } from '../reducers/markersReducer';
import { MarkerInfo } from './MarkerInfo';
import { TMarker } from '../types';

const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";

export const MapChart = () => {
    const markers = useSelector((state) => state.markers.markers)
    const dispatch = useDispatch()
    const handlerShowInfo = (id: number, isVisible: boolean): void => {
        !isVisible && dispatch(changeVisibleInfo({ id: id, isVisible: true }));
    }
    const isSidebarShow: boolean = useSelector((state) => state.sidebar.isShow);
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [58, 20, 0],
                scale: 400
            }}
        >
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#EAEAEC"
                            stroke="#D6D6DA"
                        />
                    ))
                }
            </Geographies>
            {markers.length && !isSidebarShow && markers.map(({ name, coordinates, markerOffset, isVisibleInfo, descriptions, id }: TMarker) => (
                <Marker key={id} coordinates={coordinates}
                    onClick={() => handlerShowInfo(id, isVisibleInfo)}
                >
                    <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
                    {isVisibleInfo &&
                        <MarkerInfo name={name} descriptions={descriptions} y={markerOffset} />
                    }
                </Marker>
            ))}
        </ComposableMap>
    );
};