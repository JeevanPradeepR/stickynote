import { useEffect, useState } from "react";
import HeaderTemplate from "../spareparts/header";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SaveIcon from '@mui/icons-material/Save';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import {Theme} from '../spareparts/theme';
import DropdownComponent from "./dropdowns";
import fonts from './fontList.json'
import DefaultSettings from "./defaultSetting.json";
import {Link} from "react-router-dom";
import RevertSettings from "./revertSettings";

function Settings(){
  const [showPopup, setShowPopup] =  useState(false);
  useEffect(()=>{    
    const settings = JSON.parse(localStorage.getItem("stickynoteSettings"));
    if(settings.theme === 'bright') {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'rgb(15, 14, 14)';
    }
 },[])
   const getValue = () => {
    if(!localStorage.getItem("stickynoteSettings")){
      localStorage.setItem("stickynoteSettings",  JSON.stringify(DefaultSettings))
    }
    return JSON.parse(localStorage.getItem("stickynoteSettings"))
  }
  const handleSave = () => {
    const settings = {
      "profile": "StickyNote",
      "theme": "bright",
      "font":{
          "family": fontFamily,
          "style": fontStyles,
          "size": fontSize,
          "color": fontColor
      }
    }
    localStorage.setItem("stickynoteSettings",  JSON.stringify(settings))

  }
 
  const [fontFamily, setFontFamily] = useState(getValue().font.family);
  const [fontStyles ,setFontStyle] = useState(getValue().font.style)
  const [fontSize ,setFontSize] = useState(getValue().font.size)
  const [fontColor ,setFontColor] = useState(getValue().font.color)
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

  const handleConfirmation = () => {
    if(localStorage.getItem("stickynoteSettings")){
      localStorage.removeItem("stickynoteSettings")
      localStorage.setItem("stickynoteSettings",  JSON.stringify(DefaultSettings))
    }
  }

  const handleRevert = () => {
      setShowPopup(true)
  }

 return (<div>
    <HeaderTemplate/>
    <RevertSettings 
            showPopup={showPopup}
            handleConfirmDelete={handleConfirmation} 
            setShowPopup={setShowPopup}
    />
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
          <span style={{fontFamily: fontFamily, fontStyle: fontStyles==='oblique'?'oblique': 'normal', fontWeight: fontStyles==='bold'?'bold': 'normal', fontVariant: fontStyles==='small-caps'?'small-caps': 'normal', fontSize: fontSize, color: fontColor }}>Choose your font style</span>
          <br/>
          <DropdownComponent
            title="Font Family"
            options={fonts.fontFamily.options}
            values={fonts.fontFamily.values}
            defaultOptIndex={fontFamily}
            handleChange={handleFontFamilyChange}
          />
         
<br/> 

<DropdownComponent
title='Font style'
options={fonts.fontStyle.options}
values={fonts.fontStyle.values}
defaultOptIndex={fontStyles}
handleChange={handleFontStyle}
/>


          <br/>
          <DropdownComponent
title='Font size'
options={fonts.fontSize.options}
values={fonts.fontSize.values}
defaultOptIndex={fontSize}
handleChange={handleFontSize}
/>
         

          <br/>

          <DropdownComponent
            title='Font Color'
options={fonts.fontColor.options}
values={fonts.fontColor.values}
defaultOptIndex={fontColor}
handleChange={handleFontColor}
styles={fonts.fontColor.styles}
/>

        </details>
        <p></p>
        <Button variant="contained" color="info" onClick={handleRevert} startIcon={<SettingsBackupRestoreIcon/>}>Revert</Button> &nbsp;
        <Link to="/" style={{color:'white'}}> 
          <Button variant="contained" color="success" onClick={handleSave} startIcon={<SaveIcon/>}>Save & go back</Button>
        </Link>&nbsp;
        <Link to="/">
          <Button variant="contained" color="error" startIcon={<CancelPresentationIcon/>}>Cancel</Button>
        </Link>
      </div>
    

    </div>
 </div>)
}
export default Settings;