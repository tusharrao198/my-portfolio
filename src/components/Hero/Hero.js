import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Tushar Rao, 
      </SectionTitle>
      <SectionText>
        B.Tech | EE | IIT MANDI |  Pre-Final Year <br/>
        I am a Full Stack Web Developer.
      </SectionText>
      <Button onClick={() => window.location="https://github.com/tusharrao198"}>About Me</Button>
    </LeftSection>

  </Section>
);

export default Hero;