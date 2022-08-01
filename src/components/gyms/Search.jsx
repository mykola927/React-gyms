import React from 'react'
import {Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RoomIcon from '@mui/icons-material/Room';

import CustomTextField from './common/CustomTextField.jsx';

export default function Search(){
  const searchEnd = (
    <div className="inline-flex flex-row">
      <Button variant="contained" color="error" style={{marginRight:"7px"}}><RoomIcon /></Button>
      <Button variant="contained" color="error">Clear</Button>
    </div>
  );
  return(
    <div>
      <CustomTextField color="white" placeholder="Search gym name here..." start=<SearchIcon/> end={searchEnd} />
    </div>
  )
}
