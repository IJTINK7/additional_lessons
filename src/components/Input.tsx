import React, {ChangeEvent} from 'react';

type PropsType = {
	inputValue: string
	setInputValue: (newTitle: string)=> void
}

export const Input: React.FC<PropsType> = ({inputValue, setInputValue}) => {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value)
	}
	return (
		<div>
			<input value={inputValue} type="text" onChange={onChangeHandler}/>
		</div>
	);
};

//useRef

// import React, {RefObject} from 'react';
//
// type PropsType = {
// 	inputValue: RefObject<HTMLInputElement>
// }
//
// export const Input: React.FC<PropsType> = ({inputValue}) => {
// 	return (
// 		<div>
// 			<input type="text" ref={inputValue}/>
// 		</div>
// 	);
// };