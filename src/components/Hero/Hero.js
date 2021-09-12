import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there, <br/>
        Tushar Rao 
      </SectionTitle>
      <SectionText>
        I am a Full Stack Web Developer.
      </SectionText>
      <Button onClick={() => window.location="https://github.com/tusharrao198"}>About Me</Button>
    </LeftSection>

  </Section>
);

export default Hero;