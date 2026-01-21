import React from "react";

const Profile = ({username, email, }) => {
  return (
    <div className="bg-amber-500 text-center text-2xl w-full h-screen justify-center items-center text-white">
        {/* Hello Profile */}
      <div className="flex justify-center items-center">
        <div className=" bg-amber-400 p-3 m-4 w-90 h-120 text-center justify-center items-center rounded-lg shadow-xl border-amber-100 border-4">
          <div>
            <h2>User's Profile</h2>
            </div>
          <div className="rounded-4xl text-center justify-center items-center flex p-2 ">
            <img className="rounded-4xl" src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?semt=ais_hybrid&w=740&q=80" alt="avatar" width={200} height={150}/>
          </div>
          <div className="text-amber-100 text-center ">
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
