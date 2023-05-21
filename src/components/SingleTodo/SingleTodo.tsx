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
    
    const [isEditing, setIsEditing] = useState<boolean>(true);
    const [newText,setNewText] = useState<string>(singleTodo.text);

    const onEditingTodo = (event:React.ChangeEvent<HTMLInputElement>) => {
        setNewText(event.target.value)
        singleTodo.text = newText
    }
    
    const handlePencilClick = () => {
        setIsEditing(false);
    }

    const handleSaveClick = () => {
        setIsEditing(true);
    }
    
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
                    alt="" 
                    className="icons" 
                    onClick={() => handlePencilClick()}
                    />
            </div>
        )
    }
    else return(
        <div className="todo-item">
            <input 
                type='text'
                className="item-input"
                value={newText}
                onChange={onEditingTodo}
                />
            <ButtonTodo
                onClick={() => handleSaveClick()}
                className="item-button"
                children={'Edit'}
                />
        </div>
    )
    
}