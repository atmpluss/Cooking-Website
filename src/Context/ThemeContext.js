import { createContext, useReducer } from "react";


export const ThemeContext = createContext()


const themeReducer = (state, action)=>{
    switch (action.type){
        case "CHANGE_COLOR":
            return{...state, color:action.payload}
        case "CHANGE_MODE":
            return{...state, mode:action.payload}
        defualt:
            return state
    }

}

export const ThemeProvider = function({children}){
    const [state, dispatch]=useReducer(themeReducer,{color:"#5824c", mode:"dark"})
    const changeColor = (color) =>{
        dispatch({type:"CHANGE_COLOR", payload:color})
    }
    const changeMode = (mode) =>{
        dispatch({type:"CHANGE_MODE", payload:mode})
    }
    return(
        <ThemeContext.Provider value = {{...state, changeColor, changeMode}}>
            {children}
        </ThemeContext.Provider>
    );

}