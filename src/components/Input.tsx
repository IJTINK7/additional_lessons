import React, {RefObject} from 'react';

type PropsType = {
	inputValue: RefObject<HTMLInputElement>
}

export const Input: React.FC<PropsType> = ({inputValue}) => {
	return (
		<div>
			<input type="text" ref={inputValue}/>
		</div>
	);
};