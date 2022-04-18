import "./Recipe.css"
import {useParams} from "react-router-dom"
// import { useFetch } from "../../useFetch/useFetch"
import { useTheme } from "../../Hooks/useTheme";
import { useState, useEffect } from "react";
import {projectFirestore} from "../../firebase/config"


export default function Recipe() {

  const {id} = useParams();
    // const url = "http://localhost:8000/recipes/" + id
    // const {data:recipe, isPending, error} = useFetch(url)
  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const {mode} = useTheme()

  useEffect(()=>{
    setIsPending(true);
    projectFirestore.collection("recipes").doc(id).onSnapshot(resp=>{
      if(resp.exists){
        setRecipe(resp.data())
        setIsPending(false)

      }else{
        setIsPending(false)
        setError("data cannot be found")
      }
    }); 

  },[id])

  const handleClick = ()=>{
    projectFirestore.collection("recipes").doc(id).update({
      title:"Something different"
    })
  }

  return (
    <div className={`recipe ${mode}`}>
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">data is loading ...</div>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Take {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ign=><li key={ign}>{ign}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick}>update</button>
        
        </>
      ) }
    </div>
  )
}
