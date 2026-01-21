import './navbar.css'

let Navbar = () => {
  return (
    <nav className="align-center navbar d-flex">
      <div className=" justify-between bg-amber-200 flex-row flex flex-wrap py-1 rounded-b-2xlq menus ">
        <div className="flex-1 ml-5 justify-center py-2  text-blue-800 font-bold ">
            <h1 className="text-2xl">Samriddhi College</h1>
        </div>
        <div className="align-center flex flex-row justify-around px-5 py-1 ">
          <div className="navelement flex-1 items-center bg-amber-400 px-4 mr-2 rounded-lg shadow-lg  hover:bg-orange-400 transition ease-in duration-250 ">
            <button className="p-2">
                Home
            </button>
          </div>
          <div className="navelement flex-1 px-5 items-center bg-amber-400 mr-2 rounded-lg shadow-lg hover:bg-orange-400 transition ease-in duration-250 ">
            <button className="p-2">
                About_Us
            </button>
          </div>
          <div className="navelement flex-1 px-5 items-center bg-amber-400 mr-2 rounded-lg shadow-lg hover:bg-orange-400 transition ease-in duration-250 ">
            <button className="p-2">
                Contact_Us
            </button>
          </div>
          <div className="navelement flex-1 px-5 items-center bg-amber-400 mr-2 rounded-lg shadow-lg hover:bg-orange-400 transition ease-in duration-250 ">
            <button className="p-2">
                Profile
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
