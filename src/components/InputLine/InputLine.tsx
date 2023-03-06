import React, {useState} from "react";
import './InputLine.css'


export default function InputLine({addTodo}:any){
    const [value, setValue] = useState('');

    let submitHandler = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(value.trim()) {
                addTodo(value)
                setValue('')
            }
        }
    
    let onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
         
            return(
                <form onSubmit={submitHandler}>
                    <input 
                        type='text'
                        className="sub-input" 
                        value={value} onChange = {onChangeInput}/>

                    <button 
                        type='submit' 
                        className="sub-button">
                            Add
                    </button>
                        
                </form>
 )
}