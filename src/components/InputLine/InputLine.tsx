import React, {useState} from "react";
import './InputLine.css'


export default function InputLine(){
    const [value, setValue] = useState('');
    const [saveList, setSaveList] = useState<Array<String>>([]);

    function submitHandler(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if(value.trim()) {
            setSaveList(prewState => {
                return [...prewState, value]
                })
                setValue('')
            }
        }
            
            return(
                <form onSubmit={submitHandler}>
                    <input 
                        type='text'
                        className="sub-input" 
                        value={value} onChange = {event => setValue(event.target.value)}/>

                    <button 
                        type='submit' 
                        className="sub-button">
                            Add
                    </button>
                    
                    <div> {saveList.length > 0 && saveList.map((element, index) => {
                        return(
                            <div key={index}>
                                <>{element}</>
                            </div>
                        )
                        })}
                    </div>
                        
                </form>
 )
}