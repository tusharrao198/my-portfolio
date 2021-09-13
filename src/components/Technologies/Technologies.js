import React from 'react';
import { DiDatabase, DiDjango, DiDlang, DiFirebase, DiJava, DiJavascript, DiMongodb, DiMysql, DiNodejs, DiNodejsSmall, DiPostgresql, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have worked with many of the latest technologies namely,
    </SectionText>
    <List>
      <ListItem>
        <DiDlang size="3rem"/>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
             <DiPython size="2rem"/>Python <br/> <DiJavascript size="2rem"/>JavaScript<br/> <DiMysql size="2rem"/>SQL<br/> <DiJava size="2rem"/>Java <br/> C++ <br/> 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          <DiNodejsSmall size="2rem" />Node.js  <br/>
          <DiDjango size="2rem"/>Django
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem"/>
        <ListContainer>      
          <ListTitle>Database</ListTitle>
          <ListParagraph>
             <DiPostgresql/>Postgres <br/><DiMysql/>MySQL <br/><DiMongodb/>MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
