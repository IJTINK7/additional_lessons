import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from "react-router-dom"
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";
import styled from "styled-components";

export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavWrapper><NavLink className={({isActive})=> isActive ? styles.active : styles.navLink} to={"/page1"}>Page 1</NavLink></NavWrapper>
                    <NavWrapper><NavLink className={({isActive})=> isActive ? styles.active : styles.navLink} to={"/page2"}>Page 2</NavLink></NavWrapper>
                    <NavWrapper><NavLink className={({isActive})=> isActive ? styles.active : styles.navLink} to={"/page3"}>Page 3</NavLink></NavWrapper>
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

const NavWrapper = styled.div `
margin-left: 10px;
font-size: 50px;
        
& > a {
    text-decoration: none;
    color: #1e3786;
}
& > a.active {
    text-decoration: none;
    color: #03eaff;
}
& > a:hover {
    color: steelblue;
}
`