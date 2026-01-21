let Navbar = () => {
  return (
    <nav >
      <div className="d-flex justify-between bg-amber-200 flex-column">
        <div className="">Website Name</div>
        <div className="align-center d-flex">
          <div className="flex-1">Home</div>
          <div className="flex-1">About Us</div>
          <div className="flex-1">Contact Us</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
