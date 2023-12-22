import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import TextField from '@mui/material/TextField';
import HeaderTemplate from "../spareparts/header";
import PreviewAndEdit from "./previewEdit";
import HeaderTitle from "./headerTitle";
import ActionButtons from "./footer";
import RemoveFile from "./removeFile";

function ViewNotes(){
    const location = useLocation();
    const [noteId, setNoteId] = useState(location.state);
    const [edit,setEdit] = useState(false);
    const [showPopup, setShowPopup] =  useState(false);
    const handleSave = () => {
        const parseItem = JSON.parse(localStorage.getItem("stickyNote")) ?? [];
        if(parseItem.length>0){
            parseItem.map((item,index)=>{
                if(item.id===noteId.id){
                    item.title = noteId.title;
                    item.note = noteId.note;
                    item.date = noteId.date;
                    item.modified = new Date().toLocaleString();
                }
            })
            localStorage.setItem("stickyNote",JSON.stringify(parseItem)); 
        }
    }
    const handleDelete = () => {
        setShowPopup(true)
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
        if(!location.state){
            window.location.href = "/stickynote/error"
        }
        console.log(location.state);
    },[])
    return(
        <div>

        <HeaderTemplate 
            headerComponent={
                <HeaderTitle 
                    noteId={noteId} 
                    setNoteId={setNoteId}
                />
            } 
            footer = {
                <PreviewAndEdit 
                    titleText={edit?'Edit':'View'} 
                    icon={edit?<EditIcon onClick={()=>setEdit(false)}/>:<PreviewIcon onClick={()=>setEdit(true)}/>}
                />
            }
        />

        <RemoveFile 
            showPopup={showPopup}
            handleConfirmDelete={handleConfirmDelete} 
            setShowPopup={setShowPopup}
        />

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

        <ActionButtons 
            className="viewnote-buttons"
            handleSave = {handleSave}
            handleDelete ={handleDelete}
            noteId={noteId}
        />
        </div>

    )
}
export default ViewNotes;