import React from "react";
import { Box, Grid } from "@mui/material";

import Search from "./Search.jsx";
import Filter from "./Filter.jsx";
import GymList from "./GymList.jsx";

const Main = () => {
  return (
    <div style={{ backgroundColor: "black", padding: "70px", color: "white" }}>
      <Search />
      <Box sx={{ flexGrow: 1 }} className="mt-12">
        <Grid container spacing={2}>
          <Grid item lg={3} md={6} sm={12}>
            <Filter />
          </Grid>
          <Grid item lg={9} md={6} sm={12}>
            <GymList />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Main;
