import React from "react"
import classes from "./Target.module.css"
import pic from "../public/targetPic.png"
import Image from "next/image"
import { motion , useTime, useTransform} from "framer-motion"

export default function Target (props) {



    return (
        <div className={classes.container}>
            <motion.div whileHover={{scale:1.5}}>
            <Image src={pic} onClick={props.clickHandler} alt="target" width={300} height={300}
               />
               </motion.div>
        </div>
    )
}