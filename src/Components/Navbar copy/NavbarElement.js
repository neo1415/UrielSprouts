import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
// import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? 'rgba(0, 0, 0, 0.796)' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 150;
    transition: .5s all ease-in-out;

    @media screen and (max-width: 900px) {
        transition: 0.5s all ease;
        
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 9999;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    transition: .5s all ease-in-out;
    margin-top: ${({scrollNav}) => (scrollNav ? '0rem' : '9rem')};

    @media screen and (max-width: 900px) {
        margin-top: 9rem;
    }
`

export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    

    @media screen and (max-width: 900px) {
        margin-top: -9.5rem;
        z-index: 120;
    }
`;

export const MobileIcon = styled.div`
display: none;


@media screen and (max-width : 768px) {
    display: ${({toggle}) => (toggle ? 'none' : 'block')};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    z-index: 99999;
    :hover{
        color: blue;
    }

}
`
export const NavMenu = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
    width: 100%;
`

export const NavLinks = styled(LinkRouter)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #186db6;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtnLinks = styled(LinkRouter)`
    border-radius: 50px;
    background: #247fcf;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
