import {Link} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import Button from '@mui/material/Button';

const ActionButtons = ({handleSave, handleDelete, noteId}) => {
    return(
        <div className="viewnote-buttons">
            <Button variant="contained" startIcon={<SaveIcon/ >} color="primary" onClick={handleSave}>Save</Button>
            &nbsp;
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDelete}>Delete</Button>
            &nbsp;
            <Link to="/"><Button variant="outlined" startIcon={<FastRewindIcon />}>Back</Button></Link>
            <div className="viewnote-date">
                <sup>created: {noteId.date}</sup>
                {noteId.modified && <sup><br/>modified: {noteId.modified}</sup>}
            </div>
        </div>
    )
}

export default ActionButtons;