/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */


const Sidebar = ({recipeQueue, handleRemove, prepareRecipe, calculateTimeAndCalories,
    totalTime, totalCalories
}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
            {/* Want To Cook Table */}
            <div className="overflow-x-auto">
                <h2 className="border-b-2 mx-auto font-semibold text-xl text-gray-800 text-center pb-2">
                    Want To Cook: {recipeQueue.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
           recipeQueue.map((recipe,index) => (
            <tr key={index} className="hover">
               <th>{index + 1}</th>
               <td>{recipe.recipe_name}</td>
               <td>{recipe.preparing_time}</td>
               <td>{recipe.calories}</td>
               <td><button 
               onClick={() =>{handleRemove(recipe.recipe_id) 
                calculateTimeAndCalories(recipe.preparing_time,recipe.calories)}}
                
              
                className="btn rounded-full bg-green-400 px-2 
                md:px-3  text-md text-gray-800 
                            font-medium">Preparing</button></td>
            </tr>
      
           ))
        }
      
      
    </tbody>
  </table>
</div>


            {/* Currently Cooking Table */}

            <div className="overflow-x-auto mt-8">
                <h2 className="border-b-2 mx-auto font-semibold text-xl text-gray-800 text-center pb-2">
                    Currently Cooking: {prepareRecipe.length}
                </h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        
      </tr>
    </thead>
    <tbody>
        {
           prepareRecipe.map((recipe,index) => (
            <tr key={index} className="hover">
               <th>{index + 1}</th>
               <td>{recipe.recipe_name}</td>
               <td>{recipe.preparing_time}</td>
               <td>{recipe.calories}</td>
            </tr>
           ))
        }
        <tr className='border-none'>
            <th></th>
            <td></td>
            <td>Total Time = {totalTime} minutes</td>
            <td>Totla Calories = {totalCalories}</td>
        </tr>
    </tbody>
  </table>
</div>

        </div>
    );
};

export default Sidebar;