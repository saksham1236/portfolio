import { ReactNode, useState } from "react";
import Button from "../Button/Button";
import closeIcon from "../../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg";

export default function MobileNav({
	children,
}: {
	children: React.ReactNode;
}) {
	const [showMobileNav, setShowMobileNav] = useState(false);

	const handleShowNavbar = () => {
		setShowMobileNav(!showMobileNav);
	};

	return (
		<div className='Mobile__Nav'>
			<Button
				label=''
				icon={closeIcon}
                onClick = {handleShowNavbar}
			/>
			<div>{children}</div>
		</div>
	);
}
