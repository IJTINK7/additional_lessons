import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Input} from "./components/Input";

type TodosType = {
	userId: number
	id: number
	title: string
	completed: boolean
}

function App() {
	// const [data, setData] = useState(true);

	const [todos, setTodos] = useState<TodosType[]>([]);
	const [inputValue, setInputValue] = useState("")

	const fetchFoo = () => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(json => setTodos(json))
	}
	useEffect(() => {
		fetchFoo()
	}, [])

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/todos/7') // It's just an object !!!
	// 		.then(response => response.json())
	// 		.then(json => setTodos([json])) // don't forget about array of objects !!!
	// }, [])


	// const changeData1 = () => {
	// 	setData(!data)
	// }

	const showData = () => {
		fetchFoo()
	}
	const hideData = () => {
		setTodos([])
	}
	const postData = (value: string) => {
		const newTodo = {
			userId: 1,
			id: todos.length + 1,
			title: value,
			completed: false
		}
		setTodos([newTodo, ...todos])
		setInputValue("")
	}


	return (
		<div className="App">
			{/*<Button name={"Change data 1"} callBack={changeData1}/>*/}
			<div>
				<Input inputValue={inputValue} setInputValue={setInputValue}/>
				<Button name={"Add data"} callBack={()=>postData(inputValue)}/>
			</div>
			<Button name={"Show data"} callBack={showData}/>
			<Button name={"Hide data"} callBack={hideData}/>
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
