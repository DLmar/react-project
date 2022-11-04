import React from 'react';

import {Outlet} from "react-router-dom";
import css from './Layout.module.css'
import {Header} from "../Header";
import MoviePage from "../../pages/MoviePage/MoviePage";



const Layout = () => {
    return (
        <div>
            <div className={css.outlet}>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;
