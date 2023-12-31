import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

export default function HeaderTemplate({headerComponent, footer}) {
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
            {headerComponent}
          </Typography>
         {footer}    
        </Toolbar>
      </AppBar>
    </Box>
  );
}