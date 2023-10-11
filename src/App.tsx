import React, {useState} from 'react';
import './App.css';
import {NavLink, Outlet} from "react-router-dom";
import styles from "./components/Site.module.css";
import {s} from "./components/pages/_styles";

function App() {
    const [burger, setBurger] = useState(true)
    return (
        <div>
            <div>
                <div className={styles.header}><h1>HEADER</h1></div>
                <div className={styles.body}>
                    {burger
                    ? <div className={styles.nav}>
                            <s.NavWrapper><NavLink className={({isActive}) => isActive ? styles.active : styles.navLink}
                                                   to={"/page/0"}>Page 1</NavLink></s.NavWrapper>
                            <s.NavWrapper><NavLink className={({isActive}) => isActive ? styles.active : styles.navLink}
                                                   to={"/page/1"}>Page 2</NavLink></s.NavWrapper>
                            <s.NavWrapper><NavLink className={({isActive}) => isActive ? styles.active : styles.navLink}
                                                   to={"/page/2"}>Page 3</NavLink></s.NavWrapper>
                            <s.NavWrapper><NavLink className={({isActive}) => isActive ? styles.active : styles.navLink}
                                                   to={"/protected"}>Protected Page</NavLink></s.NavWrapper>
                        </div>
                    :  <div></div>
                    }

                    <div className={styles.content}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
