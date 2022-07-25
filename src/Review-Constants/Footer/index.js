import React from 'react'
import { FooterContainer, FooterWrap,WebsiteRights, SocialIconLink, SocialIcons, SocialMedia, SocialMediaWrap, } from './FooterElements'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {


  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                <WebsiteRights>UrielSprouts Limited @ {new Date().getFullYear()}
                All rights reserved</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='//www.facebook.com' target ='_blank' aria-label="FaceBook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='//Instagram.com' target ='_blank' aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='//www.Youtube.com' target ='_blank' aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='//www.twitter.com' target ='_blank' aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href='//www.linkedin.com' target ='_blank' aria-label="Linkedin">
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer