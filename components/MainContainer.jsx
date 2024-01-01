import React, { useState } from "react";

const MainContainer = () => {
  const [user, setUser] = useState();
  const [bgColor, setBgColor] = useState();

  const apiUrl = "https://randomuser.me/api/";

  const searchUser = async () => {
    try {
      const response = await fetch(apiUrl);
      const userData = await response.json();
      console.log(userData);
      const changeBgColor = () => {
        const gender = userData.results[0].gender;
        switch (gender) {
          case "male":
            return "bg-gradient-to-br from-teal-400 via-teal-500 to-blue-300";
          case "female":
            return "bg-gradient-to-br from-purple-200 via-purple-500 to-purple-800";
        }
      };

      setBgColor(changeBgColor);
      setUser(userData.results[0]);
    } catch (error) {
      console.error("error fetching random user:", error);
    }
  };

  return (
    <div
      className={`${
        bgColor
          ? bgColor
          : "bg-gradient-to-br from-blue-300 via-purple-400 to-purple-800"
      } w-[90%] max-w-[470px] text-white mt-20 mx-auto rounded-3xl py-10 px-7 text-center space-y-10`}
    >
      <div>
        <button
          onClick={searchUser}
          className="bg-white text-black py-2 px-8 rounded-full hover:shadow-2xl hover:opacity-95 border border-black transition duration-300 hover:scale-105 font-medium"
        >
          Get a New User
        </button>
      </div>
      {user && (
        <div className="flex flex-col items-center space-y-5">
          <div className="hover:scale-105 cursor-pointer transition duration-500">
            <img
              src={user.picture.large}
              alt="user img"
              className="w-32 h-32 rounded-full"
            />
          </div>
          <div className="space-y-5 font-medium text-xl">
            <div className="flex justify-center space-x-2">
              <p>Age:</p>
              <p>{user.dob.age} </p>
            </div>
            <div className="flex space-x-2">
              <p>Full Name:</p>
              <h1 className="uppercase">
                {user.name.first} {user.name.last}
              </h1>
            </div>
            <p className="text-gray-200 text-xl">+212 {user.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContainer;
