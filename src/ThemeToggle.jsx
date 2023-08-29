import { GlobalContextContainer } from "./Context"
import {BsMoonFill} from "react-icons/bs"
import {BsSun} from "react-icons/bs"





export const ThemeToggle=()=>{

    const {bgcColor, setbgcColor}=GlobalContextContainer()
    return <div ><p className="icon" style={{color: `${bgcColor? "white": "black"}`, border:"1px solid red"}} onClick={()=>{setbgcColor(!bgcColor)}}>{bgcColor?<BsSun className="sun"/>:<BsMoonFill className="moon"/>}</p></div>
}