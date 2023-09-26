import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props:CurrentBankomatPropsType) => {

    return (
        props.money.banknotes === "Dollars"
            ? <BanknoteGreen>
                <Name>{props.money.banknotes}</Name>
                <Nominal>{props.money.value}</Nominal>
            </BanknoteGreen>
            : <BanknoteBlue>
                <Name>{props.money.banknotes}</Name>
                <Nominal>{props.money.value}</Nominal>
            </BanknoteBlue>
    );
};


const BanknoteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 400px;
    height: 200px;
    margin: 10px;
`;

const BanknoteGreen = styled(BanknoteContainer)`
    background-color: green;
`;

const BanknoteBlue = styled(BanknoteContainer)`
  background-color: #169bcb;
`;

const Name = styled.div`
    display: flex;
    align-content: center;
    font-size: 30px;
`
const Nominal = styled.div`
    display: flex;
    align-content: center;
    font-size: 90px;
`