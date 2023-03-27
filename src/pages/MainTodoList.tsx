import {useState} from "react";
import InputLine from "../components/InputLine/InputLine";
import './MainTodoList.css'
import {TodoValue} from "../interface";
import cross from '../icons/cross.svg'
import pencil from '../icons/pencil.svg'


export default function MainTodoList(){

    const [saveList, setSaveList] = useState<Array<TodoValue>>([]);

    const addTodo = (value:string) => {
        setSaveList(prewState => {
            return [...prewState, {id: (Math.random() * 900 + 100).toString(),text:value}]
          })    
  }

    const removeTodo = (index:number) => {
            setSaveList([...saveList.slice(0, index), ...saveList.slice(index + 1)])
    }
    
    return (
        <>
            <InputLine addTodo={addTodo}/>
            <div> {saveList.length > 0 && saveList.map((element, index) => {
                return(
                    <div key={index} className="todo-item">
                        {index+1}. {element.text}
                        <img src={cross} alt="" className="icons" onClick={() => removeTodo(index)}/>
                        <img src={pencil} alt="" className="icons"/>
                    </div>
                )
            })}

            </div>
        </>
    )
}
