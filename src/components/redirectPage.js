import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
const Redirect = ({redirectTo, icon, text}) => {
    return(
        <Link to={redirectTo} className='header-add'>
            <Button color="inherit">{icon} &nbsp;<sub>{text}</sub></Button>
        </Link> 
    )
}

export default Redirect;