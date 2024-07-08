import classes from './Button.module.css';

export default function Button({ children, isActive, buttonClicked, ...props }) {

    return ( 
    <button 
    {...props}
    className={isActive ? `${classes.button} ${classes.active}`: classes.button } 
    onClick={buttonClicked}>
        {children}
    </button> )
}