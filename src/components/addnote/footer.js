import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
const ActionButtons = ({className, redirectTo, variant, text, save}) => {
    return(
        <div className={className}>
            <Link to={redirectTo}>
                <Button variant={variant[0]} onClick={save}>{text[0]}</Button>
            </Link> &nbsp;
            <Link to={redirectTo}>
                <Button variant={variant[1]}>{text[1]}</Button>
            </Link>
        </div>
    )
}

export default ActionButtons;

