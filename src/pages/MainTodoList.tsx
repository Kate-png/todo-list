import InputLine from "../components/InputLine/InputLine";
import './MainTodoList.css'

interface MainTodoListProps {
    saveList:Array<string>,
    addTodo: (value:string) => void
}

export default function MainTodoList({saveList,addTodo}:MainTodoListProps){
    
    return (
        <>
            <InputLine addTodo={addTodo}/>
            <div className="MainTodoList"> {saveList.length > 0 && saveList.map((element, index) => {
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
