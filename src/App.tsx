import React,{useState} from 'react';
import './App.css';
import './Normalize.css';
import MainTodoList from './pages/MainTodoList';

export default function App() {

  const [saveList, setSaveList] = useState<Array<string>>([]);

  const addTodo = (value:string) => {
    setSaveList(prewState => {
        return [...prewState, value]
        })    
}

  return (
      <div className='body'>
        <h2>
          Todo list
        </h2>

      <MainTodoList saveList={saveList} addTodo={addTodo}/>
      
      </div>
  );
}
