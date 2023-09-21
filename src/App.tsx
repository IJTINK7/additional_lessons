import React, {useEffect, useState} from 'react';
import './App.css';

type TodosType ={
	userId: number
	id: number
	title: string
	completed: boolean
}

function App() {
	const [data, setData] = useState(true);

	const [todos, setTodos] = useState<TodosType[]>([]);
	console.log(todos)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/7')
			.then(response => response.json())
			.then(json => setTodos(json))
	}, [])

	const changeData1 = () => {
		setData(!data)
	}

	return (
		<div className="App">
			<button onClick={changeData1}>Change data 1</button>
		</div>
	);
}

export default App;
