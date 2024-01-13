import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import {useState, useEffect} from 'react'
export default function Shirt() {
    return <FormatColorFillIcon style={{fontSize:'32px', color:'black', }}/>
}

export function Theme() {
    const [dark, setDark] = useState(false)
    const [light, setLight] = useState(true)
    const changeTheme = () => {
        setDark(!dark)
        setLight(!light)
        dark? document.body.style.backgroundColor = 'white': 
        document.body.style.backgroundColor = 'rgb(15, 14, 14)'
    }
    return(<div>
        {dark?<Brightness4Icon style={{color:'#212121'}}
            onClick={changeTheme}/>: <LightModeIcon onClick={changeTheme}/>}
            
           
        </div>)
}
