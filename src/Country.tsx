import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filterValue: BanknotsType)=> void // давайте подумаем, setFilter -это грузчик, у которого всегда в руках товар
  }

export const Country = (props: CountryPropsType) => {
    const setAll = (filterValue: BanknotsType) => {
        props.setFilterValue(filterValue)
    }

    const setDollars = (filterValue: BanknotsType) => {
        props.setFilterValue(filterValue)
    }

    const setRUBLS = (filterValue: BanknotsType) => {
        props.setFilterValue(filterValue)
    }

    return (
        <div>
            <button onClick={()=>setAll("All")}>All</button>
            <button onClick={()=>setDollars("Dollars")}>Dollars</button>
            <button onClick={()=>setRUBLS("RUBLS")}>RUBLS</button>
            <City data={props.data}/>
        </div>
    );
};

