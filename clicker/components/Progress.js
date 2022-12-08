import classes from "./Progress.module.css"

export default function Progress(props){

    return (
        <div className={classes.container}>
            <div className={classes.card}>
        <span>Points: {props.amount}</span>
        </div>
        </div>
    )
}