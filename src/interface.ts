export interface InputLineProps {
    addTodo: (value:string) => void
}

export interface MainTodoListProps {
    saveList:Array<TodoValue>,
    addTodo: (value:string) => void,
    setList: any
}

export interface TodoValue {
    id: string,
    text: string,
}