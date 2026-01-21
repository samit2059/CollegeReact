let Navbar = () => {
  return (
    <nav className="align-center ">
      <div className=" justify-between bg-amber-200 flex-row flex flex-wrap py-1">
        <div className="flex-1 ml-5 justify-center py-2 font-bold">
            <h2 className="line">Samriddhi College</h2>
        </div>
        <div className="align-center flex flex-row justify-around bg-blue-400 px-5 py-1 ">
          <div className="flex-1 items-center bg-amber-400 px-4 mr-2 rounded-lg  ">
            <button className="p-2">
                Home
            </button>
          </div>
          <div className="flex-1 px-5 items-center bg-amber-400 mr-2 rounded-lg ">
            <button className="p-2">
                About_Us
            </button>
          </div>
          <div className="flex-1 px-5 items-center bg-amber-400 mr-2 rounded-lg ">
            <button className="p-2">
                Contact_Us
            </button>
          </div>
          <div className="flex-1 px-5 items-center bg-amber-400 mr-2 rounded-lg ">
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
