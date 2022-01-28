import React from 'react';
import { FooterContainer,
    FooterSubscription,
    FooterSubText,
    FooterSubHeading,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink } from './styles';

    import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
   

const Footer = () => {
    return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
               Gostou do nosso trabalho? Venha conosco!!!!!
            </FooterSubHeading>
            <FooterSubText>
                ps: não irá se arrepender
            </FooterSubText>
        </FooterSubscription>
        <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Sobre</FooterLinkTitle>
            <FooterLink to='/sign-up'>Funcionamento</FooterLink>
            <FooterLink to='/'>Serviços</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contato</FooterLinkTitle>
            <FooterLink to='/'>Contato</FooterLink>
            <FooterLink to='/'>Suporte</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Social Medias</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            TECH+
          </SocialLogo>
          <WebsiteRights>ANA CARLA © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.instagram.com/anacarlapaiva/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>         
            <SocialIconLink href='https://www.twitter.com/anacarlkkkj/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='https://www.linkedin.com/in/anacarlapaiva/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href='https://github.com/anacarlapaiva' target='_blank' aria-label='GitHub'>
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}
   

export default Footer;
