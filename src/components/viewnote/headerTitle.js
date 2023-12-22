import Typography from '@mui/material/Typography';
import EventNoteIcon from '@mui/icons-material/EventNote';

const HeaderTitle = ({noteId, setNoteId}) => {
    return(
        
        <Typography variant="h6" component="span"  className="appbar"sx={{ fontWeight:'600', marginLeft:'25%'}}>
            <EventNoteIcon sx={{marginBottom:'-5px'}}/>View Notes &nbsp;
            <input className="viewnote-title"  onChange={(e)=>setNoteId({...noteId,title:e.target.value})} defaultValue={noteId.title}></input>
        </Typography>
    )
}

export default HeaderTitle;