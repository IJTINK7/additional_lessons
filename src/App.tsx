import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
	const [data1, setData1] = useState(true);
	const [data2, setData2] = useState(true);
	const [data3, setData3] = useState(true);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/7')
			.then(response => response.json())
			.then(json => console.log(json))
	}, [data1, data2, data3])

	const changeData1 = () => {
		setData1(!data1)
	}
	const changeData2 = () => {
		setData2(!data2)
	}
	const changeData3 = () => {
		setData3(!data3)
	}
	return (
		<div className="App">
			<button onClick={changeData1}>Change data 1</button>
			<button onClick={changeData2}>Change data 2</button>
			<button onClick={changeData3}>Change data 3</button>
		</div>
	);
}

export default App;
