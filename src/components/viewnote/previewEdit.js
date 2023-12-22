import Tooltip from '@mui/material/Tooltip';
const PreviewAndEdit = ({titleText, icon}) => {
    return(
            <Tooltip title={titleText} arrow>
                {icon}
            </Tooltip>
        )
}

export default PreviewAndEdit;