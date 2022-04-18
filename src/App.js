import './App.css'
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"

import { useEffect } from 'react'
import Home from "./pages/Home/Home.js"
import Create from "./pages/Create/Create.js"
import Recipe from "./pages/Recipe/Recipe.js"
import Search from "./pages/Search/Search.js"
import ThemeSlector from './components/ThemeSlector'
import Navbar from './components/Navbar'
// const axios = require('axios');

import {useTheme} from "./Hooks/useTheme"

function App() {

  // useEffect( () => {

  //   const fetchData = async () => {
  //     const result = await axios.get("http://localhost:8000/recipes")
  //     console.log(result.data[0]);
  //   }

  //   fetchData()

  // },[]);

  const{mode} = useTheme();

   
   
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSlector />
        <Switch>  
            <Route exact path="/"> <Home /> </Route>
            <Route  path="/create"> <Create /> </Route>
            <Route  path="/search"> <Search /> </Route>
            <Route  path="/recipe/:id"> <Recipe /> </Route>
            <Route path="*"><Redirect to="/" /></Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App
