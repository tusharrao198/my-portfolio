import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, NavProductsIcon, SocialIcons, Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: '20'}}>
          <DiCssdeck size="3rem" />
          <Span>Tushar Rao</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <br/>
      <li>
        <Link href="#tech">
          <NavLink>Tech</NavLink>
        </Link>
      </li>
      <br/>
      <li>
        <Link href="#accomplishments">
          <NavLink>Achievements</NavLink>
        </Link>
      </li>
      <br/>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
      
      {/* <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li> */}
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/tusharrao198">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/tusharrao198/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/tushar.rao.35762">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
