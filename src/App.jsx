import Banner from "./components/Header/Banner";
import Navbar from "./components/Header/Navbar";
import RecipeSection from "./components/Header/RecipeSection";
import Recipes from "./components/RecipeCards/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => {
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
        <Recipes></Recipes>


        {/* Sidebar */}
        <Sidebar></Sidebar>


      </section>
    </div>
  );
};

export default App;