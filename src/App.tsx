import React, {useState} from 'react';
import './App.css';
import {Site} from "./components/Site";
import {Outlet, Routes} from "react-router-dom";


function App() {
    return (
        <div>
            <Outlet/>
            {/*<Site/>*/}
        </div>
    );
}


export default App;
