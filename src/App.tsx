import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";

export type BanknotesType = "All" | "Dollars" | "RUBLES" // создадим типы для banknotes -он может быть 'Dollars', 'RUBLES' или 'All'
export type MoneyType = {
    banknotes: BanknotesType
    value: number // не ленимся, убираем заглушку, и пишем правильный тип)
    number: string // ложку за Димыча, за...
}

let money: MoneyType[] = [  // типизируем
    {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
    {banknotes: 'RUBLES', value: 100, number: ' w1234567890'},
    {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    {banknotes: 'RUBLES', value: 100, number: ' r1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    {banknotes: 'RUBLES', value: 50, number: ' v1234567890'},
]

// типизируем на входе и выходе
export const moneyFilter = (money: MoneyType[], filter: BanknotesType): MoneyType[] => {
    if(filter === "Dollars" || filter === "RUBLES"){
        return money.filter(el => el.banknotes === filter)
    }
    return money
}

function App() {
    // убираем заглушки в типизации и вставляем в качестве инициализационного значения defaultMoney
    const [filterValue, setFilterValue] = useState<BanknotesType>('All')   // по умолчанию указываем все банкноты

    // а вот сейчас притормаживаем. И вдумчиво: константа filteredMoney получает результат функции moneyFilter
    // в функцию передаем деньги и фильтр, по которому ихбудем выдавать(ретёрнуть)
    const filteredMoney = moneyFilter(money, filterValue)
    return (
        <div className="App">
            <Country
                data={filteredMoney}   //отрисовать будем деньги после фильтрации
                setFilterValue={setFilterValue}  //useState передаем? Так можно было?!
            />
        </div>
    );
}

// Итого: в этой компоненте у нас мозги. А вот отрисовка где-то глубже. Погружаемся в Country


export default App;
