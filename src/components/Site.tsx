import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from "react-router-dom"
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";
import { s } from './pages/_styles';

export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <s.NavWrapper><NavLink className={({isActive})=> isActive ? styles.active : styles.navLink} to={"/page1"}>Page 1</NavLink></s.NavWrapper>
                    <s.NavWrapper><NavLink className={({isActive})=> isActive ? styles.active : styles.navLink} to={"/page2"}>Page 2</NavLink></s.NavWrapper>
                    <s.NavWrapper><NavLink className={({isActive})=> isActive ? styles.active : styles.navLink} to={"/page3"}>Page 3</NavLink></s.NavWrapper>
                </div>
                <div className={styles.content}>
                  <Routes>
                      <Route path={"/"} element={<Navigate to={"page1"}/>}/>
                      <Route path={"/page1"} element={<PageOne/>}/>
                      <Route path={"/page2"} element={<PageTwo/>}/>
                      <Route path={"/page3"} element={<PageThree/>}/>
                      <Route path={"/*"} element={<Error404/>}/>
                  </Routes>
                </div>
            </div>
        </div>
    );
};