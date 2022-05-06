import './App.css';
import { useEffect, useState } from 'react';
import video from './Assets/food.mp4';
import Recipe from './Components/Recipe';
import ScrollButton from './Components/ScrollButton';



function App() {

  const API_ID = "8eb7d64b";
  const API_KEY = "0da08eac9aef08d57e138d2ed64ef96e";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [submitSearch, setSubmitSearch] = useState("avocado")

  const preventDef = (e) => {
    e.preventDefault();
    setSubmitSearch(mySearch);
  }


  useEffect(() => {
    async function fetchData() {
    const response = await fetch(`https://api.edamam.com/search?q=${submitSearch}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    
    setMyRecipes(data.hits);
      }
    fetchData();
    }, [submitSearch])

    const myRecipeSearch = (e) => {
      setMySearch(e.target.value);
      
    }



  return (
    <div className='App'>

      <div className="center">
          <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          </video>
          <h1>Find a Recipe</h1>
      </div>

      <div className='center'>
        <form onSubmit={preventDef}>
          <input className='search' placeholder='Search by ingredients...' onChange={myRecipeSearch} value={mySearch}></input>
        </form>
      </div>

    <div className='center'>
      <div className='allRec'>
          {myRecipes.map(elem => (
            <Recipe key={elem.recipe.url}
            label={elem.recipe.label} 
            calories={elem.recipe.calories} 
            image={elem.recipe.image}
            ingredients={elem.recipe.ingredientLines}
            cuisine={elem.recipe.cuisineType}
            mealType={elem.recipe.dishType}
            time={elem.recipe.totalTime}
            weight={elem.recipe.totalWeight}
            />
      ))}
    </div>
    </div>

    <ScrollButton/>


    </div>
  );
}

export default App;
