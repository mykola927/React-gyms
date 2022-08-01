import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import gym from "./gym.json";
import { Rating, Typography, Button } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
const SingleGym = (props) => {
  const theme = useTheme();
  return (
    <div className="flex mb-6 mx-auto w-full">
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0), rgba(0,0,0, 0.8)),url(${props.data.cover_image})`,
          width: 430,
          height: 300,
          backgroundSize: "100% 100%",
          position: "relative",
        }}
      >
        <img
          src="./assets/img/free.gif"
          alt="free"
          style={{
            position: "absolute",
            width: 80,
            height: 90,
            left: 0,
            top: -10,
          }}
        />
      </div>
      <div className="ml-4 relative w-3/5">
        <Typography variant="h5" component="h5" className="font-bold">
          {props.data.gym_name}
        </Typography>
        <Rating name="simple-controlled" value={0} />
        <Typography variant="h6" component="h6" className="font-bold">
          {props.data.address1}
        </Typography>
        <Typography variant="h6" component="h6" className="font-bold">
          <NearMeIcon style={{ color: "green" }} />
          {props.data.gym_name} | {props.data.distance_text}
        </Typography>

        <div className="flex justify-between absolute w-full bottom-1">
          <Typography
            variant="h5"
            style={{ color: "yellow", fontWeight: "bolder" }}
          >
            {props.data.plan_name}
          </Typography>
          <Button variant="contained" color="error" className="mr-14">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleGym;
