import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import RoomIcon from "@mui/icons-material/Room";

export default function CustomTextField(props) {
  const CssTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      color: props.color,
      "& fieldset": {
        borderColor: props.color,
      },
      "&:hover fieldset": {
        borderColor: props.color,
      },
      "&.Mui-focused fieldset": {
        borderColor: props.color,
      },
    },
  });
  return (
    <CssTextField
      style={{ color: props.color, width: "100%" }}
      id="custom-css-outlined-input"
      placeholder={props.placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" style={{ color: props.color }}>
            {props.start}
          </InputAdornment>
        ),
        endAdornment: <div>{props.end}</div>,
      }}
      variant="outlined"
    />
  );
}
