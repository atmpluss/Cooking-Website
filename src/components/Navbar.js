import "./Navbar.css"
import { Link } from "react-router-dom"
import Searchbar from "./Searchbar"
import { useTheme } from "../Hooks/useTheme"


export default function Navbar() {
  const {color} = useTheme();
  return (
    <div className="navbar" style={{background: color}}>
        <nav>
            <Link to="/" className="brand">Homepage</Link>
            <Searchbar />
            <Link to="/create">Create</Link>
        </nav>

    </div>
  )
}
