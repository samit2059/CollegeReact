import React from "react";

const Profile = () => {
  return (
    <div className="bg-amber-500 text-center text-2xl w-full h-screen justify-center items-center text-white">
        {/* Hello Profile */}
      <div className="flex justify-center items-center">
        <div className=" bg-amber-400 p-3 m-4 w-90 h-120 text-center justify-center items-center rounded-lg shadow-xl border-amber-100 border-4">
          <div>
            <h2>User's Profile</h2>
            </div>
          <div>
            <img src="" alt="avatar" />
          </div>
          <div>
            <div>UserName: </div>
          <div>Email : </div>
          <div>Age : </div>
          <div>Address : </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
