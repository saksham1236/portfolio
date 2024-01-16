import "./Nav.scss";
import frotoIcon from "../../assets/logo/frotoIcon.png";
import Button from "../Button/Button";
import happyEmoji from "../../assets/icons/grinning_face_with_smiling_eyes_3d.png";
import menuIcon from "../../assets/icons/menu_FILL0_wght400_GRAD0_opsz24.svg";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
/**
 * @description
 * Navbar component for use with my portfolio
 */
export default function Nav() {
	return (
		<nav>
			<div className='nav__logo'>
				<div className='nav__logo__icon'>
					<img
						src={frotoIcon}
						alt='Froto Design Icon'
					/>
				</div>
			</div>
			<div className='nav__links'>
				<ul className='nav__links__list'>
					<li className='nav__links__list__item'>
						<Button
							link='/'
							label='Home'
						/>
					</li>
					<li className='nav__links__list__item'>
						<Button
							link='/about'
							label='About'
						/>
					</li>
					<li className='nav__links__list__item'>
						<Button
							link='/about'
							label='Contact Me'
							icon={happyEmoji}
							imgAlt='Happy Emoji'
						/>
					</li>
				</ul>
			</div>

			<div className='nav-mobile'>
				<Button
					label=''
					icon={menuIcon}
					imgAlt='menu'
				/>
			</div>
		</nav>
	);
}
