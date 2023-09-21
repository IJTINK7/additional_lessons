import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

type TodosType = {
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
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(json => setTodos(json))
	}, [])

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/todos/7') // It's just an object !!!
	// 		.then(response => response.json())
	// 		.then(json => setTodos([json])) // don't forget about array of objects !!!
	// }, [])


	const changeData1 = () => {
		setData(!data)
	}

	return (
		<div className="App">
			<Button name={"Change data 1"} callBack={changeData1}/>
			<div>{todos.map(el => {
					return (
						<div key={el.id}>
							<input type="checkbox" checked={el.completed}/>
							<span> <b>title:</b> {el.title} </span>
							<span> <b>id:</b> {el.id} </span>
						</div>
					)
				})}
			</div>
		</div>
	);
}

export default App;
