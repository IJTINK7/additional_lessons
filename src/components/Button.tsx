import React from 'react';

type PropsType = {
	name: string
	callBack: ()=> void
}
export const Button: React.FC<PropsType> = ({name, callBack}) => {
	const callBackHandler = () =>{
		callBack()
	}
	return (
		<div>
			<button onClick={callBackHandler}>{name}</button>
		</div>
	);
};