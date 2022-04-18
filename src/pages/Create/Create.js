import React, {useState, useRef, useEffect} from "react"
// import { useFetch } from "../../Hooks/useFetch";
import { useHistory } from "react-router-dom";
import {projectFirestore} from "../../firebase/config"
import "./Create.css"



export default function Create() {
  const [title, setTitle] = useState ('');
  const [method, setMethod] = useState ('');
  const [cookingTime, setCookingTime] = useState ('');
  const [newIngredient, setNewIngredient] = useState("")
  const [Ingredients, setIngredients] = useState([])
  const ingredients = useRef(null)
  const history = useHistory()


  // const {postData, data} = useFetch("http://localhost:8000/recipes", "POST")

 


  const handleSubmit = async (e)=>{
    e.preventDefault();
    const doc = { title, Ingredients, method, cookingTime: cookingTime + ' minutes' }
    try{
      await projectFirestore.collection("recipes").add(doc)
      history.push("/")
    }catch(error){
      console.log(error);
    }
  }

  const handleAdd = e=>{
    e.preventDefault();
    const ing = newIngredient.trim();

    if(ing && !Ingredients.includes(ing)){
      setIngredients(preval=>[...preval, ing])
    }
    setNewIngredient("")
    ingredients.current.focus();

  }

  // useEffect(()=>{
  //   if(data){
  //     history.push("/");
  //   }


  // },[data, history]);

  return (
    <div className="create">
      <h2 className="page-title"> Create a new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            value={title}
            onChange={e=>setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          <span>ingredients:</span>
          <div className="ingredients">
            <input type="text" value={newIngredient} onChange={e=>setNewIngredient(e.target.value)} ref={ingredients} />
            <button onClick={handleAdd}>Add</button>
          </div>
          <p>Ingredients: {Ingredients.map(ing=><em key={ing}>{ing}, </em>)}</p>

        </label>
        <label>
          <span>Recipe Method</span>
          <textarea
            value={method}
            onChange={e=>setMethod(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Cooking Time (min)</span>
          <input
            type="number"
            value={cookingTime}
            onChange={e=>setCookingTime(e.target.value)}
            required
          />
        </label>
        <button className="btn">submit</button>
      </form>
      
      
    </div>
  )
}
