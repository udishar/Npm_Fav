import React from "react"


export default function Input(props){
    return(
        <input className={props.className} placeholder={props.placeholder} type={props.type} onChange={(e)=>props.onChange(e.target.value)} value={props.value}/>
    )
}