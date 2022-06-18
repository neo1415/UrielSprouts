import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:var(--primary-color);
    // border-top-left-radius:15rem ;
   

    @media screen and (max-width: 480px) {
        height: 1300px;
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

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column  ;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
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
    font-family: var(--font-base);
    font-size: 32px;
    font-weight: 800;
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
    
`

export const ServicesP = styled.p`
    text-align: center;
    font-size: 20px;
        font-weight: 400;
        color: var(--secondary-color);
        width: 100%;
        // white-space: nowrap;
        overflow: hidden;
        border-right: 1px solid var(--secondary-color);
`