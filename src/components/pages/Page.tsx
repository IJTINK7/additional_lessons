import React from 'react';
import {PagesType} from "../../data/dataState";
import {useParams} from "react-router-dom";

type PropsType = {
	pages: PagesType[]
}
export const Page = (props: PropsType) => {
	const params = useParams()
	const currentId = Number(params.id)
	return (
		<div>
			<div>
				{props.pages[currentId].heading}
			</div>
			<div>
				{props.pages[currentId].about}
			</div>
		</div>

	);
};