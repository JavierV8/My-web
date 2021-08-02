import styled from 'styled-components';

export const ProjectsStyle = styled.ul`
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    width: 80%;
    margin: auto;
    
    @media only screen and (max-width : 1250px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width : 900px) {
        width: 98%;
        padding: 0;
    }
    @media only screen and (max-width : 450px) {
        grid-template-columns: repeat(1, 1fr);
    }
`