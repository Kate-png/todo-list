import {useState} from "react";
import InputLine from "../components/InputLine/InputLine";
import './MainTodoList.css'
import {TodoValueType} from "../interface";
import TodoList from "../components/TodoList/TodoList";

export default function MainTodoList(){

    const [saveList, setSaveList] = useState<Array<TodoValueType>>([]);

    const addTodo = (value:string) => {
        setSaveList(prewState => {
            return [...prewState, {id: (Math.random() * 900 + 100).toString(),text:value}]
        })
    }

    const removeTodo = (index:number) => {
        setSaveList([...saveList.slice(0, index), ...saveList.slice(index + 1)])
    }

    const editTodo = (index:number) => {
        console.log(index)
    }
    
    return (
        <>
            <InputLine addTodo={addTodo}/>
            <TodoList saveList={saveList} removeTodo={removeTodo} editTodo = {editTodo}/>
        </>
    )
}
