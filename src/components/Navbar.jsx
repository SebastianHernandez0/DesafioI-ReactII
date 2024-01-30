import { IoHome } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GiCakeSlice } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="layout__nav">
            <ul className="nav__ul1">
                <li>
                    <Link to="/">
                        <IoHome></IoHome>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/Contacto">
                        <RiContactsBook2Fill style={{ marginRight: "5px" }}></RiContactsBook2Fill>
                    Contacto
                    </Link>
                    

                </li>
            </ul>
            <ul className="nav__ul2">
                <li>
                    <GiCakeSlice style={{ marginRight: "5px" }}></GiCakeSlice>
                    Happy Cake</li>
            </ul>
        </nav>
    )




}