
import axios from 'axios';
import React, { useState } from 'react'
import Header from "../../components/header/Header";
const APP_ID = "8f40eb70";
const APP_KEY = "382d9cee119390200fc044d88b747af2";
const Home = () => {
  const [query,setQuery] = useState("");
  const [food,setFood] = useState();
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal,setMeal] = useState(mealTypes[0].toLocaleLowerCase());

  const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  const getData = async () => {
    if(query){
      const result = await axios.get(baseUrl);
      setFood(result.data.hits)
      console.log(result);
    }else {
      console.log("Lütfen Formu doldur");

    }
    
  }
  return (
    <div>
      <Header setQuery={setQuery} getData={getData} mealTypes={mealTypes} setMeal={setMeal}/>
    </div>
  )
}

export default Home