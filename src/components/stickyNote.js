import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Paper from '@mui/material/Paper';
import ButtonAppBar from "./header";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';

function StickyApp(){

    const [stickyNote,setStickyNote] = useState([]);
    const [search,setSearch] = useState("*");

    const displayStickyNote = (searchResult = '*') => {
        console.log(searchResult)
        const parseItem = JSON.parse(localStorage.getItem("stickyNote")) ?? [];
        let stickyNote = [];
        if(parseItem.length>0){
            stickyNote = parseItem.map((item,index)=>{
                if(searchResult!==null || searchResult!==undefined || searchResult.trim()==='' || searchResult==='*'){
                    console.log(searchResult+"+1")

                    if(item.title.toLowerCase().includes(searchResult.toLowerCase()) || item.note.toLowerCase().includes(searchResult.toLowerCase()) || searchResult==='*'){
                        return (
                            <Link   to={`/view/${item.id}`} state={{id:item.id,note:item.note,title:item.title, date:item.date, modified:item?.modified}} >
                                <Paper variant="elevation" elevation={3} className="stickynote-paper">
                                    <div key={index} >
                                            <div>
                                            <b> {item.title.substring(0,10)} </b>
                                                <div className="stickynote-content">
                                                    {item.title.length>10 && "..."}
                                                    {item.note.substring(0,50)}
                                                    {item.note.length>50 && "..."}
                                                </div>
                                            </div>
                                    </div>
                                </Paper>
                            </Link>
                        )
                    }return null;
                }
            })
        }
        const isAllNotNull = stickyNote.some(note=> note!==null);
        if(parseItem.length>0){
            if(isAllNotNull===false){
                console.log("insidezzz notnull")
                setStickyNote(handlezeroFileSearch(searchResult))
            }else{
                setStickyNote(stickyNote);
            }
        }else{
            setStickyNote(handleCreateNewFileInfo())
        }
       
      //  setStickyNote(stickyNote);
    }
    const handlezeroFileSearch = (searchText) =>{
        return (  
        <Alert severity="warning">
        <AlertTitle>File not found with the keyword: {searchText}</AlertTitle>
        The search doesn't match the keyword — <strong>retype the text or click 'x' in the search box to go back</strong>
      </Alert>)
    }
    const handleCreateNewFileInfo = () =>{
        return(
            <Alert severity="info">
  <AlertTitle>Create a new file</AlertTitle>
  Click on <strong><Link to="/add" className="stickynote-nofile"><AddCardOutlinedIcon/> Add</Link></strong> in the right top corner.
</Alert>
        )
    }
    useEffect(()=>{
       displayStickyNote();
    },[])
    return (
        <div>
            <ButtonAppBar searchDisplay={displayStickyNote}/>
     
            <br/> <br/>
            {stickyNote}
            
        </div>
    );
}

export default StickyApp;