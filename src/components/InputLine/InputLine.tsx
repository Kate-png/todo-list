import React, {useState} from "react";


function InputLine({onCreate}:any){
    const [value, setValue] = useState('');
    const [saveList, setSaveList] = useState<Array<String>>([]);

    function submitHandler(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if(value.trim()) {
            onCreate(value)
            setSaveList(prewState => {
                return [...prewState, value]
                })
                setValue('')
            }
            }
            
            return(
                <form onSubmit={submitHandler}>
                    <input type='text' className="comment" value={value} onChange = {event => setValue(event.target.value)}/>
                    <button type='submit' className="button">Add</button>
                    
                    <div> {saveList.length && saveList.map((element, index) => {
                        return(
                        <>
                        <b key={index}>{element}</b>
                        <br/>
                        </>
                        )
                        }) }</div>
                        
                        </form>
 )
}

export default InputLine
