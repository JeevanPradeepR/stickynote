
import FileDownloadIcon from '@mui/icons-material/FileDownload';
function DownloadFile({title, note}){
    const file = new File([note], `${title}.txt`, {
        type: 'text/plain',
      })
    return(
        <a download={`${title}.txt`} target="_blank" rel="noreferrer" href={URL.createObjectURL(file)} style={{
            textDecoration: "inherit",
            color: "inherit",
        }}><FileDownloadIcon/></a>

    )
}
export default DownloadFile;