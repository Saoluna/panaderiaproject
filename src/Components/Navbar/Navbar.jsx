import React, {useState} from "react";
import './Navbar.css'
import Logo from '../../assets/img/logo.png'
import Firma from '../../assets/img/RuleyLuna.png'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo"> <img src={Logo} alt="Logo"/> <img src={Firma} alt="Firma" /></div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#"> Inicio</a>
                <a href="#"> Panes</a>
                <a href="#"> Galletas</a>
                <a href="#"> Postres</a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar