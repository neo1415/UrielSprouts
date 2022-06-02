import styled from "styled-components";

export const SlideSection= styled.section`
width: 100%;
margin: 5rem auto;
max-width:100%;
margin-top: 0;
background: linear-gradient(rgba(0, 0, 0, 0.456), rgb(0, 0, 0)),url(mission.jpg);
/* border-top-left-radius:15rem ;
border-top-right-radius:15rem ; */
position: relative;
z-index: 3;

/* background-image: linear-gradient(45deg, 
     black, blue,), url('../../Images/84631.jpg'); */
/* background-image : linear-gradient(45deg, rgba(
                145, 146, 122, 0.62), rgba(
                  217, 91, 132, 0.58)), url(
'84631.jpg');; */

@media screen and (max-width: 992px) {
    /* width: 95vw; */
    padding-bottom: 4rem;
}
`
// export const Icon=styled.i`
//     font-size: 3rem;
// `

export const SectionCenter = styled.div`
    margin: 0 auto;
    margin-top: -6.5rem;
    width: 80vw;
    height: 250px;
    max-width: 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
    display: flex;
`
export const SectionArticle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;
`
// export const ActiveSlide=styled.div`

// `
// export const LastSlide=styled.div`
//     transform: translateX(-100%);
// `
// export const NextSlide=styled.div`
//     transform: translateX(100%);
// `
export const SliderImage = styled.img`
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 4px solid hsl(210, 31%, 80%);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    margin-top: 2rem;

`
export const SliderH4 = styled.h4`
    text-transform: uppercase;
    color: #000;
    margin-bottom: .25rem;
`
export const SliderTitle= styled.p`
        font-family: 'M PLUS Rounded 1c', sans-serif;
        font-size: 32px;
        font-weight: 800;
        text-transform:uppercase ;
        color: var(--primary-color);
        margin-bottom: 2rem;
        margin-top: 3rem;
        position: relative;
        z-index: 1;
        color: var(--secondary-color);
`
export const SectionTitle= styled.div`
    text-align: center;
    margin-bottom: 2rem;
`
export const SliderH2= styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 2rem;
    margin-top: 2rem;
`
export const ButtonPrev =styled.i`
    position: absolute;
    margin-top: 13rem;
    transition-property: 200px;
    transform: translateY(-50%);
    background:#186db6 ;
    border-radius: 50%;
    color: #fff;
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: .25rem;
    cursor: pointer;
    transition: all .3s linear;
    left: 0;

    &:hover{
        background: skyblue;
    }

    @media screen and (min-width: 880px) {
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
        border-radius: 50%;
        margin-right:2rem ;
    }
`

export const ButtonNext =styled.i`
    position: absolute;
    margin-top: 13rem;
    transition-property: 200px;
    transform: translateY(-50%);
    background: #186db6;
    color: #fff;
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: .25rem;
    cursor: pointer;
    transition: all .3s linear;
    right: 0;

    &:hover{
        background: skyblue;
    }

    @media screen and (min-width: 880px) {
    }
`

export const SliderDescription=styled.p`
                margin: 0 auto;
                color: rgb(250, 250, 250);
                font-weight: 600;
                line-height: 1.6;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media screen and (max-width: 880px) {
        padding-bottom: 1rem;
    }
`

