import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Backdrop from '@mui/material/Backdrop';
const RemoveFile = ({showPopup, handleConfirmDelete, setShowPopup}) => {
    return(   
    <Backdrop
        className="backdrop"
        open={showPopup}>
         <Alert severity="error" className="backdrop-alertbox">
             <AlertTitle>Are you sure want to delete this file?</AlertTitle>
             Once deleted, file can't be recovered<strong>!</strong>
            <br/><br/>
            <Link to="/">
                <Button variant="contained" color="error" onClick={()=>{ handleConfirmDelete(); setShowPopup(false)}}>
                Yes
                </Button>
            </Link>
            &nbsp;
            <Button variant="contained" color="primary" onClick={()=>setShowPopup(false)}>
                No
            </Button>   
         </Alert>
    </Backdrop>
    )
}
export default RemoveFile;