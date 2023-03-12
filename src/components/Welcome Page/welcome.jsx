import React from "react";
import Button from "../../atoms/Buttons/button";
import style from './welcome.module.css'
import { useNavigate } from "react-router-dom";


export default function Welcome(){
    const navigate=useNavigate()
    return(
        <div className={style.container}>
        <div className={style.main}>
             Welcome to Favorite NPM Packages
        </div>
        <div className={style.div2}>
            <p className={style.p}>You don't have any favs yet. Please Add.</p>
         <Button Value="Add Favs" className={style.btn} onClick={()=>navigate("/addfavs")}></Button>
        </div>
        </div>
    )
} 