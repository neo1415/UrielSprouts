import React from 'react'
import { Upperbar, UpperContainer, UpperIcon, UpperText, Icon, Text,  UpperMenu, UpperItem, UpperLinks } from './upperBarElement'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPhoneAlt, FaClock} from 'react-icons/fa';

const UpperBar = () => {
  return (
    <>
        <Upperbar>
            <UpperContainer>
            <UpperIcon>
                <UpperText>
                    <Icon>
                        <FaClock />
                    </Icon>
                    <h5>Service Hours</h5>
                </UpperText>
                <Text>
                     <h6>Mon - Fri: 8:00am - 5:00pm</h6>
                </Text>
            </UpperIcon>     
            <UpperIcon>
                <UpperText>
                    <Icon>
                        <FaPhoneAlt />
                    </Icon>
                    <h5>Call Us</h5>
                </UpperText>
                <Text>
                    <h6>08141252812</h6>
                </Text>
            </UpperIcon>     
                <UpperMenu>
                  <UpperItem>
                    <UpperLinks href='//www.facebook.com' target ='_blank' aria-label="FaceBook">
                        <FaFacebook />
                    </UpperLinks>
                  </UpperItem>
                  <UpperItem>
                    <UpperLinks href='//www.instagram.com' target ='_blank' aria-label="Instagram">
                        <FaInstagram />
                    </UpperLinks>
                  </UpperItem>
                  <UpperItem>
                    <UpperLinks href='//www.youtube.com' target ='_blank' aria-label="Youtube">
                        <FaYoutube />
                    </UpperLinks>
                  </UpperItem>
                  <UpperItem>
                    <UpperLinks href='//www.twitter.com' target ='_blank' aria-label="Twitter">
                        <FaTwitter />
                    </UpperLinks>
                  </UpperItem>
                </UpperMenu>
            </UpperContainer>
        </Upperbar>
    </>
  )
}

export default UpperBar