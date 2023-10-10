import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from "react-router-dom"
import {Error404} from "./pages/Error404";
import { s } from './pages/_styles';
import {Page} from "./pages/Page";
import {dataState} from "../data/dataState";

export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <s.NavWrapper><NavLink className={({isActive})=> isActive ? styles.active : styles.navLink} to={"/page/0"}>Page 1</NavLink></s.NavWrapper>
                    <s.NavWrapper><NavLink className={({isActive})=> isActive ? styles.active : styles.navLink} to={"/page/1"}>Page 2</NavLink></s.NavWrapper>
                    <s.NavWrapper><NavLink className={({isActive})=> isActive ? styles.active : styles.navLink} to={"/page/2"}>Page 3</NavLink></s.NavWrapper>
                </div>
                <div className={styles.content}>
                  <Routes>
                      <Route path={"/"} element={<Navigate to={"page1"}/>}/>
                      <Route path={"/page/:id"} element={<Page pages={dataState.pages}/>}/>
                      <Route path={"/page/:id"} element={<Page pages={dataState.pages}/>}/>
                      <Route path={"/page/:id"} element={<Page pages={dataState.pages}/>}/>
                      <Route path={"/*"} element={<Error404/>}/>
                  </Routes>
                </div>
            </div>
        </div>
    );
};