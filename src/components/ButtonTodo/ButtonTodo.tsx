export default function ButtonTodo(
    {
        className,
        onClick,
        children,
    }:ButtonProps
) 
{  
    return (
        <>
            <button
                className={className}
                onClick={onClick}
            >
                {children}
            </button>
            

        </>
    )

}