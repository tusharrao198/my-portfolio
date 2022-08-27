import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Slogan } from "./HeroStyles";

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Tushar Rao,
			</SectionTitle>
			<SectionText>
				B.Tech | EE | CSE(Minor) | IIT MANDI | Final Year <br />
				<br />
				Reasearch in Development & Automation Internship @ Siemens
				<br />
			</SectionText>
			<Button
			// onClick={() =>
			// 	(window.location = "https://github.com/tusharrao198")
			// }
			>
				About Me
			</Button>
			<SectionText>
				<Slogan>
					git commit -m "Dedicating every day of my life."
				</Slogan>
				<br />{" "}
				<Slogan>
					I am a Electrical Engineering undergrad at IIT Mandi.
					Although from Electrical branch I have always been
					passionate about various domains in Computer Science.
					<br />
					<br /> I'm a Full Stack Web Developer who loves creating new
					stuff with new technologies. I love programming.
					<br />
					<br />
					My interest has been in astronomy and music since my school
					days. I was a Web Development Head of the Xpecto'22 ,
					Technical Fest of IIT Mandi & Space Technology and Astronomy
					Cell of my college.{" "}
				</Slogan>
			</SectionText>
		</LeftSection>
	</Section>
);

export default Hero;
