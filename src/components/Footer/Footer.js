import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <SectionTitle main>Contact Me</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact No.</LinkTitle>
          <LinkItem href="tel:7017423019">+91 7017423019</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Personal Email</LinkTitle>
          <LinkItem href="mailto:tushar.rao198@gmail.com">
            tushar.rao198@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>College Email</LinkTitle>
          <LinkItem href="mailto:b19199@students.iitmandi.ac.in">
            b19199@students.iitmandi.ac.in
          </LinkItem>
        </LinkColumn>

      
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan>Innovating one project at a time</Slogan> */}
          <Slogan>git commit -m "Dedicating every day of my life."</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/tusharrao198">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/tusharrao198/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/tushar.rao.35762">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
