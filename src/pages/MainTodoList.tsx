import {useState} from "react";
import InputLine from "../components/InputLine/InputLine";
import './MainTodoList.css'
import TodoList from "../components/TodoList/TodoList";

interface editTodoProps {
    index:number,
    newTodoText:string,    
}

export default function MainTodoList(){

    const [saveList, setSaveList] = useState<Array<TodoValueType>>([]);

    const addTodo = (value:string) => {
        setSaveList(prewState => {
            return [...prewState, {id: (Math.floor(Math.random() * (100))).toString(),text:value}]
        })
    }

    const removeTodo = (index:number) => {
        setSaveList([...saveList.slice(0, index), ...saveList.slice(index + 1)])
    }

    const editTodo = ({index,newTodoText}:editTodoProps) => {
       
    }
    
    return (
        <>
            <InputLine 
                addTodo={addTodo}
            />
            <TodoList 
                saveList={saveList} 
                removeTodo={removeTodo} 
                editTodo = {editTodo}
            />
        </>
    )
}
