import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import {useState, useEffect} from 'react'
export default function Shirt() {
    return <FormatColorFillIcon style={{fontSize:'32px', color:'black', }}/>
}

export function Theme() {
    useEffect(()=>{
        
    },[])
    const [dark, setDark] = useState(JSON.parse(localStorage.getItem("stickynoteSettings")).theme==='bright'?false:true)
    const [light, setLight] = useState(JSON.parse(localStorage.getItem("stickynoteSettings")).theme==='dark'?true:false)
    const changeTheme = () => {
        const settings = JSON.parse(localStorage.getItem("stickynoteSettings"));
        setDark(!dark)
        setLight(!light)
        if(dark) {
            document.body.style.backgroundColor = 'white';
            settings.theme = 'bright'
        } else {
            document.body.style.backgroundColor = 'rgb(15, 14, 14)';
            settings.theme = 'dark'
        }
        localStorage.setItem("stickynoteSettings",  JSON.stringify(settings))
    }
    return(<div>
        {JSON.parse(localStorage.getItem("stickynoteSettings")).theme==='dark'?<Brightness4Icon style={{color:'#212121'}}
            onClick={changeTheme}/>: <LightModeIcon onClick={changeTheme}/>}
            
           
        </div>)
}
