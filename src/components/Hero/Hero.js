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
      </SectionText>
      <Button onClick={() => window.location="https://github.com/tusharrao198"}>About Me</Button>
      <SectionText>I'm a Full Stack Web Developer. <br/>I love creating new stuff.</SectionText>
    </LeftSection>

  </Section>
);

export default Hero;