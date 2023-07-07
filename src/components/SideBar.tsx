import Form from './Form';
import { memo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeVisibleSidebar } from '../reducers/sidebarReducer';

export const SideBar = memo(function SideBar() {
    const isShow = useSelector((state) => state.sidebar.isShow)
    const dispatch = useDispatch();
    const handlerChangeVisibleSidebar = (): void => {
        dispatch(changeVisibleSidebar())
    }
    return (
        <>
            <input type="checkbox" id="nav-toggle" checked={isShow} onChange={handlerChangeVisibleSidebar} />
            <nav className="nav">
                <label htmlFor="nav-toggle" className="nav-toggle"></label>
                <Form changeVisibleSidebar={handlerChangeVisibleSidebar} />
            </nav>
        </>
    )
});