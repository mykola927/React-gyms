import React from "react";
import { Typography } from "@mui/material";
import CustomTextField from "./common/CustomTextField.jsx";
import CustomSelect from "./common/CustomSelect.jsx";
import SearchIcon from "@mui/icons-material/Search";

const Filter = () => {
  const cityName = ["New Delhi", "Ghaziabad", "Noida", "Delhi"];
  return (
    <div>
      <Typography variant="h3" components="h3">
        Filters
      </Typography>
      <div className="inline-flex flex-col md:mt-6">
        <Typography variant="h6" components="h6">
          Location
        </Typography>
        <CustomTextField
          color="grey"
          placeholder="Enter location"
          start=<SearchIcon />
        />
      </div>
      <div className="inline-flex flex-col md:mt-6">
        <Typography variant="h6" components="h6">
          Price
        </Typography>
        <div className="inline-flex flex-row">
          <CustomTextField color="grey" placeholder="Min" className="mr-6" />
          <CustomTextField color="grey" placeholder="Max" />
        </div>
      </div>
      <div className="inline-flex flex-col md:mt-6">
        <Typography variant="h6" components="h6">
          Cities
        </Typography>
        <div className="inline-flex flex-row">
          <CustomSelect color="white" cityName={cityName} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
