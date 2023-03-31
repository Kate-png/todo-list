interface TodoValueType {
    id: string,
    text: string,
}

interface ButtonProps {
    type?: string,
    className?: string,
    onClick?: () => void,
    children?: any,
}