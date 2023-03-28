import cross from '../../icons/cross.svg'
import pencil from '../../icons/pencil.svg'
import {RemoveTodoType,TodoValueType,EditTodoType} from "../../interface";

export default function TodoList(saveList:Array<TodoValueType>, removeTodo:RemoveTodoType, editTodo:EditTodoType) {
    return(
        <div> {saveList.length > 0 && saveList.map((element, index) => {
                return(
                    <div key={index} className="todo-item">
                        {index+1}. {element.text}
                        <img src={cross} alt="" className="icons" onClick={() => removeTodo(index)}/>
                        <img src={pencil} alt="" className="icons" onClick={() => editTodo(index)}/>
                    </div>
                )
            })}
        </div>
    )
}