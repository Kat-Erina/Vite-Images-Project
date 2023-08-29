import { createContext, useContext, useState} from "react";
import React from "react";


const GlobalContext=createContext()
 
export const Context=({children})=>{
    const [bgcColor, setbgcColor]=useState(false)
    const [value, setValue]=useState("");
    const [array, setArray]=useState([])


    return <GlobalContext.Provider value={{bgcColor, setbgcColor, value, setValue, array}}>{children}</GlobalContext.Provider>

}


export const GlobalContextContainer=()=>{
    return useContext(GlobalContext)
}