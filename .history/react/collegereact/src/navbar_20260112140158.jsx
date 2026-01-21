let Navbar = () => {
  return (
    <nav >
      <div className=" justify-between bg-amber-200 flex-row flex">
        <div className="flex-1 ml-5 text-a">Website Name</div>
        <div className="align-center flex flex-row justify-between bg-blue-400 px-5">
          <div className="flex-1 px-5">Home</div>
          <div className="flex-1 px-5">About Us</div>
          <div className="flex-1 px-5">Contact Us</div>
          <div className="flex-1 px-5">Profile</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
