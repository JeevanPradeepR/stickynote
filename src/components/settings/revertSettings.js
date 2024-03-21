import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Backdrop from '@mui/material/Backdrop';

const RevertSettings = ({showPopup, handleConfirmDelete, setShowPopup}) => {
    return(   
    <Backdrop
        className="backdrop"
        open={showPopup}>
         <Alert severity="error" className="backdrop-alertbox">
             <AlertTitle>Are you sure want to revert this settings?</AlertTitle>
            <br/><br/>
            <Link to="/">
                <Button variant="contained" color="error" onClick={()=>{ handleConfirmDelete(); setShowPopup(false)}}>
                Yes & go back
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
export default RevertSettings;