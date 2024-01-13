import { useState } from "react";
import HeaderTemplate from "../spareparts/header";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SaveIcon from '@mui/icons-material/Save';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Shirt,{Theme} from '../spareparts/theme';



function Settings(){
  const [fontFamily, setFontFamily] = useState('');
  const [fontStyles ,setFontStyle] = useState('')
  const [fontSize ,setFontSize] = useState('')
  const [fontColor ,setFontColor] = useState('')
  const [editName, setEditOption] = useState(false)

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  const handleFontStyle = (event) => {
    setFontStyle(event.target.value)
  }

  const handleFontSize = (event) => {
    setFontSize(event.target.value)
  }

  const handleFontColor = (event) => {
    setFontColor(event.target.value)
  }

 return (<div>
    <HeaderTemplate/>
    
  <div className="settings">
      <div style=
      {{padding:'1% 1% 1% 1%', width:'50%', 
      backgroundColor:'white', boxShadow: '3px 5px 10px  grey'}}>
        <h1>Settings</h1>
          <details open>
            <summary><b>Profile</b></summary>
<div className="settings">
            <Avatar
    className="avatar "
  sx={{ bgcolor: 'skyblue', marginTop: '10px', height:'100px', width: '100px', textAlign:'center' }}
  alt=""
  src="/broken-image.jpg"
>
 <span> SN </span>
</Avatar>
{!editName && <strong>Sticky Note</strong>}
<br/>
{editName && <input/>}


{!editName ? 
  <Button component="label" onClick={()=>setEditOption(true)}
sx={{borderRadius:'20px'}} variant="contained" endIcon={<ArrowRightIcon />}>
      Edit Profile
</Button>
:
<div style={{display:'inline'}}>
  <br/>
<Button variant="contained" color="success" onClick={()=>setEditOption(false)} startIcon={<SaveIcon/>}>Save</Button> &nbsp;
<Button variant="contained" color="error" onClick={()=>setEditOption(false)}startIcon={<CancelPresentationIcon/>}>Cancel</Button>
</div>
}
</div>
          </details>
        <details open>
        <summary>
        <b >Theme</b>        
        </summary>
        Choose your Theme to modify background
      <span style={{float:'right'}}><Theme/></span>
      </details>
      <br/>

        <details open>
          <summary>
            <b>Font</b>
          </summary>
          <span style={{fontFamily: fontFamily, fontStyle: fontStyles==='oblique'?'oblique': 'normal', fontWeight: fontStyles==='bold'?'bold': 'normal', fontVariant: fontStyles==='small-caps'?'small-caps': 'normal', fontSize: fontSize, color: fontColor }}>Choose your font syle</span>
          <br/>
          <span>Font Family</span>
          <span style={{float:'inline-end',display:'flex'}}> 
          <select onChange={handleFontFamilyChange}>
            <option value="Arial, sans-serif">
              <span style={{fontFamily:'Arial, sans-serif'}}>Arial</span>
            </option>
            <option value="Verdana, sans-serif">
            <span style={{fontFamily:'Verdana, sans-serif'}}>Verdana</span>
            </option>
            <option value="Tahoma, sans-serif">
            <span style={{fontFamily:'Tahoma, sans-serif'}}>Tahoma</span>
            </option>
            <option value="Times New Roman, serif">
            <span style={{fontFamily:'Times New Roman, serif'}}>Times New Roman</span>
            </option>
            <option value="Georgia, serif">
            <span style={{fontFamily:'Georgia, serif'}}>Georgia</span>
            </option>
            <option value="Garamond, serif">
            <span style={{fontFamily:'Garamond, serif'}}>Garamond</span>
            </option>
            <option value="Courier New, monospace">
            <span style={{fontFamily:'Courier New, monospace'}}>Courier New</span>
            </option>
            <option value="Brush Script MT, cursive">
            <span style={{fontFamily:'Brush Script MT, cursive'}}>Brush Script MT</span>
            </option>
            <option value="Chiller">
            <span style={{fontFamily:'Chiller'}}>Chiller</span>
            </option>
          </select>
          </span>
<br/>
          <span>Font style</span>
          <span style={{float:'inline-end', display:'flex'}}>
          <select onChange={handleFontStyle}>
          <option value="normal">
              <span style={{fontStyle:'normal'}}>Normal</span>
            </option>
            <option value="oblique">
            <span style={{fontStyle:'oblique'}}>Italic</span>
            </option>

            <option value="bold">
            <span style={{fontWeight:'bold'}}>Bold</span>
            </option>

            <option value="small-caps">
            <span style={{fontVariant:'small-caps'}}>Small caps</span>
            </option>
          </select>
          </span>

          <br/>
          <span>Font size</span>
          <span style={{float:'inline-end', display:'flex'}}>
          <select onChange={handleFontSize}>
          <option value="8px">
              <span style={{fontSize:'8px'}}>8</span>
          </option>
          <option value="10px">
              <span style={{fontSize:'10px'}}>10</span>
          </option>
          <option value="12px">
              <span style={{fontSize:'12px'}}>12</span>
          </option>
          <option value="14px">
              <span style={{fontSize:'14px'}}>14</span>
          </option>
          <option value="16px">
              <span style={{fontSize:'16px'}}>16</span>
          </option>
          <option value="18px">
              <span style={{fontSize:'18px'}}>18</span>
          </option>
          <option value="22px">
              <span style={{fontSize:'22px'}}>22</span>
          </option>
          <option value="26px">
              <span style={{fontSize:'26px'}}>26</span>
          </option>
          <option value="32px">
              <span style={{fontSize:'32px'}}>32</span>
          </option>
          <option value="48px">
              <span style={{fontSize:'48px'}}>48</span>
          </option>
          </select>
          </span>

          <br/>
          <span>Font Color</span>
          <span style={{float:'inline-end', display:'flex', color:'black'}}>
          <select onChange={handleFontColor}>
          <option value="#001f3f" style={{backgroundColor:'#001f3f'}}>
              <span>Navy</span>
          </option>
          <option value="#0074D9" style={{backgroundColor:'#0074D9'}}>
              <span>BLUE</span>
          </option>
          <option value="#7FDBFF" style={{backgroundColor:'#7FDBFF'}}>
              <span>AQUA</span>
          </option>
          <option value="#39CCCC" style={{backgroundColor:'#39CCCC'}}>
              <span>TEAL</span>
          </option>
          <option value="#B10DC9" style={{backgroundColor:'#B10DC9'}}>
              <span>PURPLE</span>
          </option>
          <option value="#F012BE" style={{backgroundColor:'#F012BE'}}>
              <span>FUCHSIA</span>
          </option>
          <option value="#85144b" style={{backgroundColor:'#85144b'}}>
              <span>MAROON</span>
          </option>
          <option value="#FF4136" style={{backgroundColor:'#FF4136'}}>
              <span>RED</span>
          </option>
          <option value="#FF851B" style={{backgroundColor:'#FF851B'}}>
              <span>ORANGE</span>
          </option>
          <option value="#FFDC00" style={{backgroundColor:'#FFDC00'}}>
              <span>YELLOW</span>
          </option>
          <option value="#3D9970" style={{backgroundColor:'#3D9970'}}>
              <span>OLIVE</span>
          </option>
          <option value="#2ECC40" style={{backgroundColor:'#2ECC40'}}>
              <span>GREEN</span>
          </option>
          <option value="#01FF70" style={{backgroundColor:'#01FF70'}}>
              <span>LIME</span>
          </option>
          <option value="#111111" style={{backgroundColor:'#111111'}}>
              <span>BLACK</span>
          </option>
          <option value="#AAAAAA" style={{backgroundColor:'#AAAAAA'}}>
              <span>GRAY</span>
          </option>
          <option value="#DDDDDD" style={{backgroundColor:'#DDDDDD'}}>
              <span>SILVER</span>
          </option>
          <option value="gold" style={{backgroundColor:'gold'}}>
              <span>Gold</span>
          </option>
          </select>
          </span>
        </details>
      </div>
    

    </div>
 </div>)
}
export default Settings;