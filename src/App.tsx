import React, {useEffect, useRef, useState} from 'react';
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
	const [todos, setTodos] = useState<TodosType[]>([]);
	console.log(todos)

	// const [inputValue, setInputValue] = useState("")
	const inputValue = useRef<HTMLInputElement>(null)

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
	const postData = () => {
		if(inputValue.current) {
			const newTodo = {
				userId: 1,
				id: todos.length + 1,
				title: inputValue.current.value,
				completed: false
			}
			setTodos([newTodo, ...todos])
			inputValue.current.value = ""
		}
	}


	return (
		<div className="App">
			<div>
				<Input inputValue={inputValue} />
				<Button name={"Add data"} callBack={postData}/>
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
