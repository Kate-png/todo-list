import React,{useState} from "react";
import InputLine from "../components/InputLine/InputLine";
import './MainTodoList.css'


export default function MainTodoList(){

    const [saveList, setSaveList] = useState<Array<String>>([]);

    let addTodo = (value:string) => {
        setSaveList(prewState => {
            return [...prewState, value]
            })    
    }
    
    return (
        <>
            <InputLine addTodo={addTodo}/>
            <div> {saveList.length > 0 && saveList.map((element, index) => {
            return(
                <div key={index}>
                    <li className="list">
                        {element}
                    </li>
                </div>
            )
            })}
            </div>
        </>
    )
}
