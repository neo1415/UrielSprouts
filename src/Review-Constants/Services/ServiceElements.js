import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:var(--primary-color);
    // border-top-left-radius:15rem ;
   

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
    @media screen and (max-width: 820px) {
        margin-top: 7rem !important;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`
export const Video =styled.video`
    height: 10rem;
    
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column  ;
    /* justify-content: flex-start; */
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    width: 300px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all .2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all .2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    color: #fff;
    margin-bottom: 64px;
    font-size: 2.7rem;
    font-weight: 800;
    text-align: center; 
    font-family: 'M PLUS Rounded 1c', sans-serif;
    text-transform:uppercase ;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
        
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: var(--black-color) !important;
    
`
export const HiCloudUpload = styled.svg`
    font-size: 4rem;
`

export const ServicesP = styled.p`
    text-align: center;
    font-size: 20px;
        font-weight: 500;
        color: var(--secondary-color);
        width: 100%;
        // white-space: nowrap;
        overflow: hidden;
        border-right: 1px solid var(--secondary-color);
`