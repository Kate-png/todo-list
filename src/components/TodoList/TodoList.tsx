import SingleTodo from '../SingleTodo/SingleTodo'

interface TodoDolistProps {
    saveList:Array<TodoValueType>,
    removeTodo: (value:number) => void,
    editTodo: (isEditing: any) => void,
}

export default function TodoList({saveList, removeTodo, editTodo}:TodoDolistProps) {

    return(
        <div> {saveList.length > 0 && saveList.map((element, index) => {
                return(
                    <div key={index}>
                        <SingleTodo 
                            index={index} 
                            singleTodo={element} 
                            removeTodo={removeTodo} 
                            editTodo={editTodo}
                        />
                    </div>
                    
                )
            })}
        </div>
    )
}