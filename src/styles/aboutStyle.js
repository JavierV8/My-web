import styled from 'styled-components';

export const AboutStyleLandscape = styled.div`
    display: flex;
    background-color: #dbdbdb;
    .about-goHome-button {

        left: 5%;

        position: fixed;
        bottom: 5vh;
        font-size: 2vw;
        border-radius: 1vw;
        font-weight: 100;
        background: #0066ff;
        border: none;
        padding: 1.5vw;
        color: white;
        cursor: pointer;
        z-index: 1;
    }
    div {
        margin-top: 3vw;
        flex: 1;
        height: 100vh;
    }
    .about-text {
        margin-right: 3.5vw;
        overflow-Y: scroll;
        height: ${pr => pr.isMobile ? '70vh' : '85vh'};
    }
    .about-image {
    }
    .about-image-box {
        position absolute;
        left: 8%;
        width: 60%;
        height: 50%;
        bottom: 0;
    }
    img {
        width: ${pr => pr.isMobile ? '45%' : '55%'};
        position: absolute;
        bottom: 0;
        opacity: 0.7;
        transition: all 0.5s cubic-bezier(.51,1.4,.82,1.01);
        transform: translateX(-150%);
    }

    h1 {
        font-family: 'Montserrat', 'Helvetica';
        font-size: 3vw;
        font-weight: 600;
        color: black;
        width: 80%;
        margin: auto;
    }
    h3 {
        font-family: 'Montserrat', 'Helvetica';
        font-size: 2vw;
        font-weight: 200;
        width: 90%;
        margin-left: 4.5vw;
    }
    p {
        font-family: 'Montserrat', 'Helvetica';
        font-size: 1.4vw;
        font-weight: 200;
        color: black;
        width: 88%;
        margin: auto;
        margin-top: 1vw;
        text-align: justify;
        margin-left: 4.5vw;
    }
`

export const AboutStylePotrait = styled.div`
    display: block;
    background-color: #dbdbdb;
    positon: fixed;
    .about-goHome-button {
        left: 5%;

        position: fixed;
        bottom: 5vh;
        font-size: 5vw;
        border-radius: 1.5vw;
        font-weight: 100;
        background: #0066ff;
        border: none;
        padding: 3vw;
        color: white;
        cursor: pointer;
        z-index: 1;
    }
    div {
        flex: 1;
        height: 90vh;
        position: absolute;
        background: transparent;
    }
    .about-text {
    }
    .about-image {
        height: 100vw;
        bottom: -6%;
        position: fixed;
        width: 100vw;
        left: -5%;
    }
    .about-image-box {
        position relative;
        width: 100%;
        bottom: 0%;
        left: 5%;
    }
    img {
        position: absolute;
        width: 100%;
        z-index: 2;
        opacity: 0.5;
        transition: all 0.5s cubic-bezier(.51,1.4,.82,1.01);
        transform: translateX(-100%);
    }

    h1 {
        font-family: 'Montserrat', 'Helvetica';
        font-size: 8vw;
        font-weight: 600;
        color: black;
        width: 90%;
        margin: auto;
        margin-top: 8vh;
    }
    h3 {
        font-family: 'Montserrat', 'Helvetica';
        font-size: 5vw;
        font-weight: 200;
        width: 90%;
        margin: auto;
    }
    p {
        font-family: 'Montserrat', 'Helvetica';
        font-size: 2.1vh;
        font-weight: 200;
        color: black;
        width: 90%;
        margin: auto;
        margin-top: 2vh;
        text-align: justify;
    }
`