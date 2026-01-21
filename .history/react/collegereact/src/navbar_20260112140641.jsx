let Navbar = () => {
  return (
    <nav className="align-center">
      <div className=" justify-between bg-amber-200 flex-row flex flex-wrap">
        <div className="flex-1 ml-5 justify-center ">Website Name</div>
        <div className="align-center flex flex-row justify-between bg-blue-400 px-5">
          <div className="flex-1 px-5 mt-">Home</div>
          <div className="flex-1 px-5">About Us</div>
          <div className="flex-1 px-5">Contact Us</div>
          <div className="flex-1 px-5">Profile</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
