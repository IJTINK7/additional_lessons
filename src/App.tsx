import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [data, setData] = useState(true);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json))
    }, [data])
const changeData = () =>{
    setData(!data)
}
  return (
    <div className="App">
        <button onClick={changeData}>Change data</button>
    </div>
  );
}

export default App;
