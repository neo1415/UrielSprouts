import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    z-index: 2;
    margin-bottom: 5rem;
    position: relative;
    background-color: ${({lightBg}) => (lightBg ? '#f9f9f9' :'#6b76886e')};
    background-image: url('../../Images/84631.jpg');
    /* border-bottom-right-radius: 15rem; */

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`



export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 560px;
    width: 100%;
    max-width: 1100px;
    margin-right:auto ;
    margin-left:auto ;
    padding: 0 24px;
    justify-content: center;
    @media screen and (max-width: 720px) {
        height: 40rem;
    }
`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto 1fr);
    align-items: center;
    grid-template-areas:${({imgStart}) => 
    (imgStart ? `'col2 col1'` : `'col1 col2'`)} ;

    @media screen and (max-width: 768px) {
        grid-template-areas:${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col' 'col2 col2'`)} ;

    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #186db6;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    line-height: 1.1;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 900;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    color: ${({lightText}) => (lightText ? '#bf2e46' : '#bf2e46')} ;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    line-height: 2rem !important;
    font-weight: 600;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    margin-bottom: 35px;
    line-height: 24px;
    font-size: 1.2rem;;
    color: ${({darkText}) => (darkText ? '#333333' : '#010606')} ;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    background-image: url(professionalism.jpg);

`

export const Video = styled.video`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border: none;
    @media screen and (max-width: 720px) {
        height: 20rem;
    }
`