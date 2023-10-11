import React from 'react';
import {PagesType} from "../../data/dataState";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
	pages: PagesType[]
}
export const Page = (props: PropsType) => {
	const params = useParams()
	const currentId = Number(params.id)
	const location = useLocation()
	const navigate = useNavigate()
	const backHandler = () => {
		navigate(-1)
	}
	const homeHandler = () => {
		navigate("/page/0")
	}
	return (
		<div>
			{location.pathname === "/page/secret" && <div>Secret text!!!</div>}
			{
				props.pages[currentId]
					? <div>

						<div>
							{props.pages[currentId].heading}
						</div>
						<div>
							{props.pages[currentId].about}
						</div>
					</div>
					: <Error404/>
			}
			<button onClick={backHandler}>Back</button>
			<button onClick={homeHandler}>Home</button>
		</div>
	);
};