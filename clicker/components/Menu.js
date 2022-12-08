import Link from "next/link"
import { Fragment } from "react"
import classes from "./Menu.module.css"

export default function Menu(props){

    return (
        <Fragment>
        <div className={classes.container} onClick={props.outOfFocus}>
            
        </div>
<div className={classes.menuGrid}>
                <span>MENU</span>
                <span onClick={props.upgradePower}>upgrage</span>
                <span onClick={props.resetHandler}>reset</span>
            </div>
</Fragment>
    )
}