import Form from './Form';
import { memo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeVisibleSidebar } from '../reducers/sidebarReducer';

export const SideBar = memo(function SideBar() {
    const isShow = useSelector((state) => state.sidebar.isShow)
    const dispatch = useDispatch();
    const handlerChangeVisibleSidebar = ():void => {
        dispatch(changeVisibleSidebar())
    }
    return (
        <>
            {!isShow && <button onClick={handlerChangeVisibleSidebar}>Создать новую метку</button>}
            {isShow && <Form changeVisibleSidebar={handlerChangeVisibleSidebar}/>}
        </>
    )
});