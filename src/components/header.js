import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import {Link} from "react-router-dom";

export default function ButtonAppBar({searchDisplay,pro}) {
  return (
    <Box sx={{ flexGrow: 1}}  >
      <AppBar position="static" className='appbar'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <EditNoteOutlinedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StickyNote
            <input onChange={(e)=>searchDisplay(e.target.value)}
            placeholder="search" type="search" className='searchbox'/>
          </Typography>
          <Link to="/add" className='header-add'>
            <Button color="inherit"><AddCardOutlinedIcon/> &nbsp;<sub>Add</sub></Button>
          </Link>    
        </Toolbar>
      </AppBar>
    </Box>
  );
}