import styled from "styled-components";

export const SliderContainer=styled.div`
    width: 90%;
    height: 350px;
    background: grey;
    position: relative;
    display: flex;
    align-items: center;
    margin: 5rem auto;
    padding: 2rem 0 2rem 0;
`

export const Slider = styled.div`
    height: 100%;
    width: 100%;
    white-space:nowrap;
    overflow-x: scroll;
    scrollbar-width: none;
    scroll-behavior:smooth ;

`
// export const MdChevronLeft = styled.div`
//     left: 0;
//     background: white;
//     border-radius: 100%;
//     position: absolute;
//     cursor: pointer;
 

// `
// export const MdChevronRight = styled.div`
//     right: 0;
//     background: white;
//     border-radius: 100%;
//     position: absolute;
//     cursor: pointer;

    
// `

export const SliderCard = styled.div`
    width:293px;
    height: 300px;
    background: white;
    border-radius: 10px;
    display: inline-block;
    margin-left:5px ;
    margin-right: 5px;
    box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 12%);
    
`   
export const SliderImage= styled.div`
width:100%;
height: 200px;
background-color: rgb(240 240 240 / 80%);
border-top-left-radius: 10px;
border-top-right-radius: 10px;
background-size: cover;
`
export const SliderDescription= styled.p`
    opacity: .5;
    font-size: 13px;
    margin: 5px 0px 5px 10px;
    white-space: pre-wrap;
    
`
export const SliderTitle = styled.p`
    font-weight: 500;
    margin-top: 10px;
    margin: 5px 0px 5px 10px;
`
