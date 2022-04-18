//style
import "./ThemeSelector.css"
import { useTheme } from "../Hooks/useTheme"
import modeIcom from "../assets/mode-icon.png"
const colors =["#58249c", "#249c6b", "#b70233"]


export default function ThemeSlector() {
    const {changeColor, changeMode, mode} = useTheme();
    const toggleMode = ()=>{
        changeMode(mode === "dark"? "light":"dark")
        console.log(mode);
    }
  return (
    <div className="theme-selector">
        <div className="mode-toggle">
            <img
            onClick={toggleMode}
            src={modeIcom}
            alt="dark/light mode"
            style={{filter:mode==="dark"?"invert(100%)":"invert(20%)"}}
             />
        </div>
        <div className="theme-buttons">
            {colors.map(color => <div key={color} onClick={()=>changeColor(color)} style={{background:color}} />
            )}
        </div>
    </div>
  )
}
