import "./RecipeList.css"
import deleteIcon from "../assets/delete-icon.png"
import {projectFirestore} from "../firebase/config"


import React from 'react'
import {Link} from "react-router-dom"
import { useTheme } from "../Hooks/useTheme"

export default function RecipeList({recipes}) {
  const{mode} = useTheme()

  if(recipes.length === 0){
    return <div className="error"> No results...</div>
  }

  const handleClick = id=>{
    projectFirestore.collection("recipes").doc(id).delete()

  }


  return (
    <div className="recipe-list">
        {recipes.map(recipe => {
        return(
        <div key={recipe.id} className={`card ${mode}`}>
                <h3> {recipe.title} </h3>
                <p>{recipe.cookingTime} to make.</p>
                <div>{recipe.method.substring(0,100)} ...</div>
                <Link to ={`./recipe/${recipe.id}`}> Cook this</Link>
                <img
                  className="delete"
                  src={deleteIcon}
                  alt="delete icon"
                  onClick={()=>handleClick(recipe.id)}
                />

        </div>
          
        );
      })}

    </div>
  )
}
