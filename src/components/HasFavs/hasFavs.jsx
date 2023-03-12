import React, { useState } from 'react'
import style from './hasFavs.module.css'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FaEdit} from 'react-icons/fa'
import Input from '../../atoms/InputField/inputField'
import Button from '../../atoms/Buttons/button'
import { useNavigate } from 'react-router-dom'

const HasFavs = () => {

    const Existing = JSON.parse(localStorage.getItem("interests")) || [];
    const [list,setList]=useState(Existing)
    const [edit , setEdit]=useState("")
    const [showInput,setShowInput]=useState(false)
    const navigate=useNavigate()
    

    function HandleDelete(value){
        const newList = list.filter((ele)=>ele.value !== value)
        localStorage.setItem("interests",JSON.stringify(newList))
        setList([...newList])
       

    }
    function HandleEdit(value){
        const edited=list.find((ele)=>ele.value === value)
        setEdit(edited.data)
        setShowInput(!showInput)

    }

  return (
    <div className={style.container}>
      <div className={style.main}>
      Welcome to Favorite NPM Packages
      </div>
      <div className={style.btn1}>
      <Button Value="Add Favs" className={style.favBtn} onClick={()=>navigate("/addfavs")}/>
      </div>
      <div className={style.tableDiv}>
        <table>
            <tr>
                <th >Packages Name</th>
                <th >Actions</th>
                
            </tr>
            {list.map((interest)=>(
                <tr>
                    <td >{interest.value}
                    {showInput?<Input/>:""}
                    </td>
                  
                    <td className={style.icons}>
                      <div onClick={()=>HandleDelete(interest.value)}> <RiDeleteBin6Line/> </div> 
                        <div onClick={()=>HandleEdit(interest.value)}> <FaEdit/></div>
                    </td>
                   
                </tr>
            ))}
        </table>
      </div>
    </div>
  )
}

export default HasFavs
