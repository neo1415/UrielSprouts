import React from 'react'
import { Column1, Column2, InfoContainer, InfoRow, TextWrapper,Video, TopLine, Heading, Subtitle,  ImgWrap, InfoWrapper } from './infoElement';

const InfoSection = ({ lightBg, lightText, id, topLine, description, Headline, imgStart, darkText, alt, img }) => {
  return (
    <>
        <InfoContainer lightBg= {lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{Headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            {/* <BtnWrap>
                                <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact = 'true'
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark= {dark ? 1 : 0}
                                dark2 = {dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap> */}
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Video autoPlay loop muted src={img} alt={alt} type='video/mp4' />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection