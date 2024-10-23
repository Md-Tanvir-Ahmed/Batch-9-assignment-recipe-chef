/* eslint-disable react/no-unknown-property */


const Navbar = () => {
    return (
        <div className=" mx-auto">
            <div className="navbar bg-base-100">
  <div className=" navbar-start">
    <h1 className="text-4xl font-bold">Recipe Calories</h1>
  </div>
  <div className="flex gap-2 navbar-center">
    <button className="btn text-md font-bold">Home</button>
    <button className="btn text-md font-bold">Recipes</button>
    <button className="btn text-md font-bold">About</button>
    <button className="btn text-md font-bold">Search</button>
  </div>
  <div className=" gap-2 navbar-end">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full bg-green-300">
        {/* // eslint-disable-next-line react/no-unknown-property */}
        <i class="fa-solid fa-user text-xl mt-1"></i>
        </div>
      </div>
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;