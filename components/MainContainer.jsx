import React, { useState } from "react";

const MainContainer = () => {
  const [user, setUser] = useState();

  const apiUrl = "https://randomuser.me/api/";

  const searchUser = async () => {
    try {
      const response = await fetch(apiUrl);
      const userData = response.json();
      console.log(userData);

      setUser(userData);
    } catch (error) {
      console.error("error fetching random user:", error);
    }
  };

  return (
    <div className="w-[90%] max-w-[470px] text-white mt-20 mx-auto rounded-3xl py-10 px-7 text-center bg-gradient-to-br from-teal-400 via-teal-500 to-purple-800 space-y-10">
      <div>
        <button className="bg-white text-black py-2 px-8 rounded-full hover:shadow-2xl hover:opacity-95 border border-black transition duration-300 hover:scale-105 font-medium">
          Get a New User
        </button>
      </div>
      <div className="flex flex-col items-center space-y-5">
        <div className="hover:scale-105 cursor-pointer transition duration-500">
          <img
            src="/imgs/nddj65fb.png"
            alt="user img"
            className="w-32 h-32 rounded-full"
          />
        </div>
        <div className="space-y-5 font-semibold">
          <h1 className="uppercase text-3xl">amine</h1>
          <p className="text-gray-200">Phone N: +67326573675</p>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
