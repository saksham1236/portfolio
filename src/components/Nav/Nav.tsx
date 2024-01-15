import "./Nav.scss";
import frotoIcon from "../../assets/logo/frotoIcon.png"
/**
 * @description
 * Navbar component for use with my portfolio
 */
export default function Nav() {
    return(
    <nav>
        <div className="nav__logo">
            <div className="image__container"><img src = {frotoIcon} alt = "Froto Design Icon"/></div>
        </div>
        <div className="nav__links">
            <ul className="nav__link__list">
                <li className="nav__link__list__item">
                    
                </li>
            </ul>
        </div>
    </nav>
    ) 
}