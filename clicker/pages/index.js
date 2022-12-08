import { Fragment, useState } from "react";
import Menu from "../components/Menu";
import Progress from "../components/Progress";
import Target from "../components/Target";
import classes from "../styles/mainIndex.module.css"


export default function MainPage () {

    const [points, setPoints] = useState(0)

    function clickHandler(){
        setPoints(prev => prev += power)
    }

    const [power, setPower] = useState(1)
    const [cost, setCost] = useState(10)

    function upgradePower(){
        if (points >= cost) {
        setPoints(prev => prev-cost)
        setPower(prev => prev*=2)
        setCost(prev => prev*=2)
        }

    }

    const [menuToggle, setMenuToggle] = useState(false)

    function outOfFocus(){
        setMenuToggle(prev => !prev)
    }

    function resetHandler() {
        setCost(prev => 10)
        setPower(prev => 1)
        setPoints(prev => 0)
    }

    const [mute, setMute] = useState(true)

    return (
        <Fragment>
            <div>
            {menuToggle && <Menu 
            outOfFocus={outOfFocus}
            upgradePower={upgradePower}
            cost={cost}
            resetHandler={resetHandler}
            />}
         </div>
        <Progress
        amount={points}
        />
        <Target
        clickHandler={clickHandler}
         />
         <span className={classes.menuBtn} onClick={() => setMenuToggle(prev => !prev)}>menu</span>
         
        </Fragment>
    )
}