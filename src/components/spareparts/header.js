import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import {Link} from "react-router-dom";

export default function HeaderTemplate({headerComponent, footer}) {
  return (
    <Box sx={{ flexGrow: 1}}  >
      <AppBar position="static" className='appbar'>
        <Toolbar>
          <Link to="/settings" style={{color:'white'}}>
         
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
            <EditNoteOutlinedIcon />
          </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StickyNote
            {headerComponent}
          </Typography>
         {footer} 
        </Toolbar>
      </AppBar>
    </Box>
  );
}