import React, {useEffect, useState} from 'react';
import './App.css';
import config from './config';
import Recipes from './Recipes';

function App() {

  const [recipes, setRecipes] = useState('');

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${config.REACT_APP_ID}&app_key=${config.REACT_APP_KEY}&diet=high-fiber&health=alcohol-free`  );
  const data = await response.json()
  setRecipes(data.hits)
}


 useEffect(() => {
  getRecipes()
 }, [])

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit' >
          Search
        </button>
        <Recipes recipes={recipes} />
      </form>
    </div>
  );
}

export default App;
