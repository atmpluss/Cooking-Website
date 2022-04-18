import "./Home.css"
// import { useFetch } from "../../Hooks/useFetch.js"
import {useState} from "react"
import RecipeList from "../../components/RecipeList"
import {projectFirestore} from "../../firebase/config"
import { useEffect } from "react"


export default function Home() {
  // const { data, isPending, error } = useFetch("http://localhost:8000/recipes")
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  useEffect(()=>{
    setIsPending(true);
    const unsub = projectFirestore.collection("recipes").onSnapshot(res =>{
      if(res.empty){
        setError("there is no data to show")
        setIsPending(false)
      }else{
        let results = [];
        res.docs.forEach(doc=>{
          results.push({id:doc.id, ...doc.data()})
          console.log(doc.data());
        })
        setData(results);
        setIsPending(false)

      }
    },(error)=>{
      setError(error.message)
      setIsPending(false)
    })

    return ()=>unsub();

  },[])
  return (
    <div className="home">
      {error && <div>there is a problem here...</div>}
      {isPending && <div> data is loading...</div>}
      {data && <RecipeList recipes={data} /> }
      
    </div>
  )
}
