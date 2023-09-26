import React from 'react';
import {City} from "./City";
import {BanknotesType, MoneyType} from "./App";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filterValue: BanknotesType)=> void // давайте подумаем, setFilter -это грузчик, у которого всегда в руках товар
  }

export const Country = (props: CountryPropsType) => {
    const setAll = (filterValue: BanknotesType) => {
        props.setFilterValue(filterValue)
    }

    const setDollars = (filterValue: BanknotesType) => {
        props.setFilterValue(filterValue)
    }

    const setRUBLES = (filterValue: BanknotesType) => {
        props.setFilterValue(filterValue)
    }

    return (
        <div>
            <button onClick={()=>setAll("All")}>All</button>
            <button onClick={()=>setDollars("Dollars")}>Dollars</button>
            <button onClick={()=>setRUBLES("RUBLES")}>RUBLES</button>
            <City data={props.data}/>
        </div>
    );
};

