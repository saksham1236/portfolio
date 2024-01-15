import CardXL from "../../components/CardXL/CardXL";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import arrowUpIcon from "../../assets/icons/north_east_FILL0_wght400_GRAD0_opsz24.svg";
import { Icon } from "@iconify/react";

import "./Home.scss";

export default function Home() {
	return (
		<section className='home'>
			<div className='home__highlight'>
				<CardXL>
					<h1>Designing, Developing, and Creating</h1>
					<Button
						label='Learn More'
						icon={arrowUpIcon}
					/>
				</CardXL>
				<div className='home__highlight__secondary'>
					<Card>
						<div className='home__highlight__secondary__grid'>
                            <Icon className="icon-skill" icon='skill-icons:typescript' />
							<Icon className="icon-skill" icon='skill-icons:react-dark' />
                        </div>
						<h2>Developer</h2>
						<Button label='View Project' />
					</Card>
					<Card>
						<h2>Recent Work</h2>
					</Card>
				</div>
			</div>
		</section>
	);
}
