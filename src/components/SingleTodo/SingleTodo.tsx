import React,{useState} from 'react'
import cross from '../../icons/cross.svg'
import pencil from '../../icons/pencil.svg'
import ButtonTodo from '../ButtonTodo/ButtonTodo'
import './SingleTodo.css'

interface SingleTodoDoProps {
    index:number,
    singleTodo:TodoValueType,
    removeTodo: (value:number) => void,
    editTodo: (isEditing: any) => void,
}

export default function SingleTodo({index,singleTodo,removeTodo,editTodo}:SingleTodoDoProps) {

    const onEditingTodo = (event:React.ChangeEvent<HTMLInputElement>) => {
        setChange(event.target.value)
        singleTodo.text = change
    }
    
    const [isEditing, setIsEditing] = useState<boolean>(true);
    const [change,setChange] = useState<string>(singleTodo.text)
    
    if(isEditing){
        return(
            <div className="todo-item">
                {index+1}. {singleTodo.text}
                <img 
                    src={cross} 
                    alt=""
                    className="icons" 
                    onClick={() => removeTodo(index)}
                    />
                <img 
                    src={pencil} 
                    alt="" className="icons" 
                    onClick={() => editTodo({setIsEditing,isEditing})}
                    />
            </div>
        )
    }
    else return(
        <div className="todo-item">
            <input 
                type='text'
                className="item-input"
                value={change}
                onChange={onEditingTodo}
                />
            <ButtonTodo
                onClick={() => editTodo({setIsEditing,isEditing})}
                className="item-button"
                children={'Edit'}
                />
        </div>
    )
    
}