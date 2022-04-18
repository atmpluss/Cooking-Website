import { useContext } from "react"
import {ThemeContext} from "../Context/ThemeContext"

export const useTheme = function(){
    const context = useContext(ThemeContext)

    if(context===undefined){
        throw new Error ("useTheme must be used inside a themeeprovider")
    }


    return context
}