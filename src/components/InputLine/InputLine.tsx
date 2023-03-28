import React, {useState} from "react";
import './InputLine.css'
import '../../interface'
import {InputLineProps} from "../../interface";

export default function InputLine({addTodo}:InputLineProps) {
    const [value, setValue] = useState('');

    const submitHandler = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(value.trim()) {
                addTodo(value)
                setValue('')
            }
        }
    
    const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
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