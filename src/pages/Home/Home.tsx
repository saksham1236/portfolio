import CardXL from "../../components/CardXL/CardXL";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import arrowUpIcon from "../../assets/icons/north_east_FILL0_wght400_GRAD0_opsz24.svg";
import arrowForward from "../../assets/icons/arrow_forward_FILL0_wght400_GRAD0_opsz24.svg"
import { Icon } from "@iconify/react";

import "./Home.scss";

export default function Home() {
	return (
		<section className='home'>
			<div className='home__highlight'>
				<CardXL>
					<h1>Designing, Developing, and Creating</h1>
                    <p className="large secondary">
                        Versatile designer and aspiring software developer, blending creativity from Motion Design and Scientific Illustration with expertise in User Experience Design to craft innovative and functional digital solutions.

                    </p>
                    <Button
						label='Learn More'
						icon={arrowUpIcon}
					/>
				</CardXL>
				<div className='home__highlight__secondary'>
					<Card>
                    <h2>Dev</h2>
						<div className='home__highlight__secondary__grid'>
                            <Icon className="icon-skill" icon='skill-icons:typescript' />
							<Icon className="icon-skill" icon='skill-icons:react-dark' />
                            <Icon className="icon-skill" icon='skill-icons:nodejs-light' />
                            <Icon className="icon-skill" icon='skill-icons:expressjs-light' />
                            <Icon className="icon-skill" icon='skill-icons:mysql-light' />
                            <Icon className="icon-skill" icon='skill-icons:git' />
                            <Icon className="icon-skill" icon='skill-icons:supabase-dark' />
                            <Icon className="icon-skill" icon='skill-icons:heroku' />
                            <Icon className="icon-skill" icon='skill-icons:jest' />
                            <Icon className="icon-skill" icon='skill-icons:sass' />
                        </div>
					</Card>
					<Card>
						<h2>Recent Work</h2>
                        <Button label = "View Projects" link = "#Projects" icon = {arrowForward} imgAlt = "forward Arrow"/>
					</Card>
				</div>
			</div>
		</section>
	);
}
