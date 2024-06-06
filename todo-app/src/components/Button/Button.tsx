const Button = ({children, onClick}: {children:React.ReactNode} {onClick:React.ReactNode})  => {
    return(
        <button type="submit" onClick={onClick}>{children}</button>
    )
};
export default Button;