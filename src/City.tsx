import React from 'react';
import {MoneyType} from "./App";
import {CurrentBankomat} from "./CurrentBankomat";
import styled from "styled-components";


type CityPropsType = {
	data: MoneyType[] //встречаем денюжки
}

export const City = (props: CityPropsType) => {
	const mappedMoney = props.data.map((el, index)=>{
		return <CurrentBankomat key={index} money={el}/>
	})
	return(
		<Wrapper>{mappedMoney}</Wrapper>
	);
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
`