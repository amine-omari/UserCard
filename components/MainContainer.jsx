import React from "react";

const MainContainer = () => {
  return (
    <div className="w-[90%] max-w-[470px] text-white mt-20 mx-auto rounded-3xl py-10 px-7 text-center bg-gradient-to-br from-teal-400 via-teal-500 to-purple-800">
      <div>
        <button className="bg-white text-black py-2 px-8 rounded-full hover:shadow-2xl hover:opacity-95 border border-black transition duration-300 hover:scale-105 font-medium">
          Get a New User
        </button>
      </div>
    </div>
  );
};

export default MainContainer;
