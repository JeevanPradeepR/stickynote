import DefaultSettings from '../settings/defaultSetting.json'
const StoredStyle = () => {
    if(!localStorage.getItem("stickynoteSettings")){
        localStorage.setItem("stickynoteSettings",  JSON.stringify(DefaultSettings))
    }
    const styles =  JSON.parse(localStorage.getItem("stickynoteSettings"))

    return {fontFamily: styles.font.family, fontStyle: styles.font.style==='oblique'?'oblique': 'normal', fontWeight: styles.font.style==='bold'?'bold': 'normal', fontVariant: styles.font.style==='small-caps'?'small-caps': 'normal', fontSize: styles.font.size, color: styles.font.color, profile: styles.profile, theme: styles.theme }
}
export default StoredStyle