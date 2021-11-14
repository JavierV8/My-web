import styled from 'styled-components';

export const ProjectsStyle1 = styled.div`
.projects-title {
    width: 90%;
    max-width: 1300px;
    position: relative;
    margin: 0;
    padding: 0;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 1px solid black;
    margin-bottom: 50px;
    margin-top: 50px;
}
`
export const ProjectsStyle = styled.ul`
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    width: 90%;
    max-width: 1300px;
    margin: auto;
    padding: 0;
    top: 50px;
    ul {
        paffing: 0;
    }

    .projects-goHome-button {
        position: fixed;
        font-family: 'Montserrat', 'Helvetica';
        font-size: ${pr => pr.isMobile ? '1.5vw' : '1vw'};
        font-weight: 600;
        border: none;
        cursor: pointer;
        padding: 1vw;
        bottom: 5%;
        left: 5%;
        background: #990000;
        color: white;
        border-radius: 8px;
    }
    
    @media screen and (orientation:portrait) {
        .projects-goHome-button {
            position: fixed;
            font-family: 'Montserrat', 'Helvetica';
            font-size: ${pr => pr.isMobile ? '3vh' : '2vh'};
            font-weight: 100;
            border: none;
            cursor: pointer;
            padding: 1.5vh;
            bottom: 5%;
            left: 5%;
            background: #990000;
            color: white;
            border-radius: 8px;
        }
    }
    @media only screen and (max-width : 1250px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 0;
    }
    @media only screen and (max-width : 900px) {
        width: 98%;
        padding: 0;
    }
    @media only screen and (max-width : 450px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0;
    }
`