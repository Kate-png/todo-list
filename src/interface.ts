export interface InputLineProps {
    addTodo: (value:string) => void,
}

export interface TodoValueType {
    id: string,
    text: string,
}

export interface RemoveTodoType {
    removeTodo: (value:number) => void,
}

export interface EditTodoType {
    editTodo: (value:number) => void,
}