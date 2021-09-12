import React from 'react';
import { DiDatabase, DiDjango, DiFirebase, DiNodejs, DiNodejsSmall, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      Worked with technolgies in web-development field namely WebSockets, ReactJs, Node.js, Django.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Worked with <br/> React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Worked with <br/> Node.js <DiNodejsSmall size="2rem"/> <br/>
            Django <DiDjango size="2rem"/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem"/>
        <ListContainer>      
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Worked with <br/> Postgres, MySQL, MongoDB
          </ListParagraph>
        </ListContainer>

      </ListItem>
    </List>
  </Section>
);

export default Technologies;
