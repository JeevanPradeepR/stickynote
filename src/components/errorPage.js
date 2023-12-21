import {Link} from 'react-router-dom'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
function ErrorPage() {
    return(
        <Alert variant="filled" severity="error">
            <AlertTitle>Error 404 Page not found!</AlertTitle>
            Click <Link to="/"><b>here</b></Link> to go back
        </Alert>
    )
}
export default ErrorPage;