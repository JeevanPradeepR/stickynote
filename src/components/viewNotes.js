import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Backdrop from '@mui/material/Backdrop';

function ViewNotes(){
    const location = useLocation();
    const [noteId, setNoteId] = useState(location.state);
    const [edit,setEdit] = useState(false);
    const [deletePopup, setDeletePopup] = useState(false)
    const [deleteConfimationComponent, setDeleteComponent] = useState(<></>)
    const handleSave = () => {
        const parseItem = JSON.parse(localStorage.getItem("stickyNote")) ?? [];
        if(parseItem.length>0){
            parseItem.map((item,index)=>{
                if(item.id===noteId.id){
                    item.title = noteId.title;
                    item.note = noteId.note;
                    item.modified = new Date().toLocaleString();
                }
            })
            localStorage.setItem("stickyNote",JSON.stringify(parseItem)); 
        }
    }
    const handleDelete = (showPopup = true) => {
    const deleteConfirmationMenu =  (        
                <Backdrop
                    className="backdrop"
                    open={showPopup}>
                     <Alert severity="error" className="backdrop-alertbox">
                         <AlertTitle>Are you sure want to delete this file?</AlertTitle>
                         Once deleted, file can't be recovered<strong>!</strong>
                        <br/><br/>
                        <Link to="/">
                            <Button variant="contained" color="error" onClick={()=>{ handleConfirmDelete(); setDeleteComponent(<></>)}}>
                            Yes
                            </Button>
                        </Link>
                        &nbsp;
                        <Button variant="contained" color="primary" onClick={()=>{setDeleteComponent(<></>)}}>
                            No
                        </Button>   
                     </Alert>
                </Backdrop>
            );
        setDeleteComponent(deleteConfirmationMenu)
    }
    const handleConfirmDelete = () => {
        const parseItem = JSON.parse(localStorage.getItem("stickyNote")) ?? [];
        if(parseItem.length>0){
            const filterItem = parseItem.filter((item,index)=>
            {
                if(item.id!==noteId.id){
                    item.id = item.id!==1 ? item.id - 1 : item.id;
                    item.title = item.title;
                    item.note = item.note;
                    return item;
                }
            }
            );
            console.log(filterItem+"zzz");
            localStorage.setItem("stickyNote",JSON.stringify(filterItem)); 
        }
    }
    useEffect(()=>{ 
        console.log(location.state);
    },[])
    return(
        <div>
            {location.state && <div>
        <Box sx={{ flexGrow: 1}}  >
            <AppBar position="static" className="appbar">
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
                </Typography> 
                <EventNoteIcon/>
                <Typography variant="h6" component="p" sx={{marginRight:'35%', fontWeight:'600'}}>View Notes &nbsp;
                <input className="viewnote-title" onChange={(e)=>setNoteId({...noteId,title:e.target.value})} defaultValue={noteId.title}></input></Typography>
                {!edit && <Tooltip title="View" arrow><PreviewIcon onClick={()=>setEdit(true)}/></Tooltip>}
                {edit && <Tooltip title="Edit" arrow><EditIcon onClick={()=>setEdit(false)}/></Tooltip>}
                </Toolbar>
            </AppBar>
        </Box>

        {deleteConfimationComponent}
        
        <TextField
          id="outlined-multiline-static"
          label={noteId.title}
          size="large"
          multiline
          rows={4}
          className="viewnote"
          sx={{marginTop:'2%'}}
          disabled={edit}
          onInput={(e)=>setNoteId({...noteId,note:e.target.value})}
          defaultValue={noteId.note}
        />  
       
        <div class="viewnote-buttons">
            <Button variant="contained" startIcon={<SaveIcon/ >} color="primary" onClick={handleSave}>Save</Button>
            &nbsp;
            {/* <Link to="/"> */}
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDelete}>Delete</Button>
                
            {/* </Link> */}
            &nbsp;
            <Link to="/"><Button variant="outlined" startIcon={<FastRewindIcon />}>Back</Button></Link>
            <div className="viewnote-date">
                <sup>created: {noteId.date}</sup>
                {noteId.modified && <sup><br/>modified: {noteId.modified}</sup>}
            </div>
        </div>
        </div>} {!location.state && 
        <div>
            <Alert variant="filled" severity="error">
                        <AlertTitle>Error 404 Page not found!</AlertTitle>
                        Click <Link to="/"><b>here</b></Link> to go back
            </Alert>
        </div>
        }
        </div>

    )
}
export default ViewNotes;