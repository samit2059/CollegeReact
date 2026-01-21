let Navbar = () => {
  return (
    <nav >
      <div className=" justify-between bg-amber-200 flex-row flex">
        <div className="flex-1">Website Name</div>
        <div className="align-center flex flex-row justify-between">
          <div className="flex-1">Home</div>
          <div className="flex-1">About Us</div>
          <div className="flex-1">Contact Us</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
