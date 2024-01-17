import { ReactNode, useState } from "react";
import Button from "../Button/Button";
import closeIcon from "../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg";
import menuIcon from "../../assets/icons/menu_FILL0_wght400_GRAD0_opsz24.svg";

import "./MobileNav.scss";

export default function MobileNav({ children }: { children: React.ReactNode }) {
	const [showMobileNav, setShowMobileNav] = useState(false);

	const handleShowNavbar = () => {
		setShowMobileNav(!showMobileNav);
	};

	return (
		<div className='nav-mobile'>
			<Button
				label=''
				icon={menuIcon}
				imgAlt='menu'
				onClick={handleShowNavbar}
			/>
			<div className={showMobileNav ? `nav-mobile__links-active` : `nav-mobile__links`}>
				<Button
					label=''
					icon={closeIcon}
					onClick={handleShowNavbar}
				/>
				<div className="nav-mobile__links__container">{children}</div>
			</div>
		</div>
	);
}
