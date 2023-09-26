import React from 'react';
import {MoneyType} from "./App";
import {CurrentATM} from "./CurrentBankomat";
import styled from "styled-components";


type CityPropsType = {
	data: MoneyType[] //встречаем денюжки
}

export const City = (props: CityPropsType) => {
	const mappedMoney = props.data.map((el, index)=>{
		return <CurrentATM key={index} money={el}/>
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