import * as React from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl, InputLabel } from "@mui/material";

export default function CustomSelect(props) {
  const CssSelectBox = styled(Select)({
    "& .MuiOutlinedInput-root": {
      color: props.color,
      "& fieldset": { borderColor: props.color },
      "&:hover fieldset": { borderColor: props.color },
      "&.Mui-focused fieldset": { borderColor: props.color },
    },
  });
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <CssSelectBox
      style={{
        color: props.color,
        // width: "100%",
        border: "1px solid white",
        width: "250px",
      }}
      id="custom-css-outlined-select"
      value={age}
      onChange={handleChange}
    >
      {props.cityName.map((item, index) => (
        <MenuItem key={item} value={index}>{item}</MenuItem>
      ))}
    </CssSelectBox>
  );
}
