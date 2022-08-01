import React from "react";
import SingleGym from "./SingleGym.jsx";
import gym from "./gym.json";

const GymList = () => {
  return (
    <div style={{ height: 1000, overflowY: "auto" }}>
      {gym.data.map((item, index) => (
        <SingleGym key={index} data={item} />
      ))}
    </div>
  );
};
export default GymList;
