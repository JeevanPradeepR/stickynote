import { useState } from "react";
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HeaderTemplate from "../header/header";

function AddNotes() {
    const [title,setTitle] = useState("Edit your title");
    const [note,setNote] = useState("Write your notes here");
    const handleSave = () => {
        const parseItem = JSON.parse(localStorage.getItem("stickyNote")) ?? [];
        const stickyNote = [{
            id: parseItem ? parseItem.length+1 : 0,
            title: title,
            note: note,
            date: new Date().toLocaleString(),
        }].concat(parseItem);
        localStorage.setItem("stickyNote",JSON.stringify(stickyNote)); 
    }
    return (
        <div>
        <HeaderTemplate 
            headerComponent={
                <Typography variant="h6" component="span" sx={{marginLeft:'38%', fontWeight:'600'}}>
                    Add Notes
                </Typography>
            } 
            footer={<></>}
            />
            <h3 contentEditable suppressContentEditableWarning={true} className="addnotes-title" onBlur={(e)=>setTitle(e.currentTarget.textContent)}>
                    Edit your title
            </h3>
            <TextField
          id="outlined-multiline-static"
          size="large"
          multiline
          rows={4}
          className="viewnote"
          defaultValue={note}
          onInput={(e)=>setNote(e.target.value)}
        />           
            <div className="addnotes-save">
                <Link to="/">
                    <Button variant="contained" onClick={handleSave}>Save & GoBack</Button>
                </Link> &nbsp;
                <Link to="/">
                    <Button variant="outlined">Cancel</Button>
                </Link>
            </div>
        </div>
    )
}
export default AddNotes;