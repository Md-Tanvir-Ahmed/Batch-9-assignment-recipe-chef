import { useState } from "react";
import Banner from "./components/Header/Banner";
import Navbar from "./components/Header/Navbar";
import RecipeSection from "./components/Header/RecipeSection";
import Recipes from "./components/RecipeCards/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [recipeQueue, setRecipeQueue] = useState([]);

  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if(!isExist){
      setRecipeQueue([...recipeQueue,recipe]);

    }else{
      alert('Recipe already exists in the Queue');
    }
    
  }
  

  const [prepareRecipe, setPrepareRecipe] = useState([])

  const handleRemove = (id)=>{
    // find which recipe to remove
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)

    // remove from want to cook table

    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue);

    // add to currently cooking table
    setPrepareRecipe([...prepareRecipe,deletedRecipe]);


  }

  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const calculateTimeAndCalories = (time, calorie) =>{
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calorie);

  }

  return (
    <div className="md:w-11/12 mx-auto">
      {/* Header section  */}
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Banner section */}
      <Banner></Banner>


      {/* Our recipes section */}
      <RecipeSection></RecipeSection>

      {/* Recipe card section */}

      <section className="flex flex-col md:flex-row gap-6">
        {/* Cards section */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>


        {/* Sidebar */}
        <Sidebar recipeQueue={recipeQueue}
         handleRemove={handleRemove}
          prepareRecipe={prepareRecipe}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
          totalCalories={totalCalories}></Sidebar>


      </section>
    </div>
  );
};

export default App;