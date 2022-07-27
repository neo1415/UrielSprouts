import styled from 'styled-components';


export const Upperbar = styled.nav`
    background: #186db6;
    height: 100px;
    margin-top: -20px;
    margin-left: 8rem;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 1rem;
    position: absolute;
    top: 0;
    z-index: 1000;

    @media screen and (max-width: 900px) {
        transition: 0.0s all ease;
        display:none;
    }
`

export const UpperContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const UpperIcon = styled.div`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    display: grid;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    font-size:1.5rem ;
    margin-right: 1.5rem;

`;

export const Icon = styled.div`
    font-size: 1rem;
    padding: 1.5px 2px 0 0;

`

export const UpperText = styled.div`
    display: flex;
    margin-top: .8rem;
    width: max-content;
    font-weight: 100;
`
export const Text = styled.div`
    font-size: 1.5rem;
    font-weight: 100;
    width: max-content;
`

export const UpperMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: 29rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const UpperItem = styled.li`
    height: 80px;
`

export const UpperLinks = styled.a`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    z-index: 10;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`


