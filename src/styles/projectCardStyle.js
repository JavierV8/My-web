import styled from 'styled-components';

export const ProjectCardStyle = styled.li`
    background-color: #ccc;
    display: flex;
    padding: 0.5em;
    margin-bottom: 20px;
    border-radius: 10px;
    

    .list-content {
        position: relative;
        width: 100%;
        border-raidus: 10px:
    }

    img {
        width: 100%;
        border-radius: 10px;
    }
    p{
margin-bottom: 80px;
    }
    button {
        position: absolute;
        bottom: 0;
        font-size: 18px;
        padding: 8px;
        border: none;
        border-radius: 5px;
        background: #0066ff;
        color: white;
        margin-left: 5px;
        margin-bottom: 5px;
        cursor: pointer;
    }
    .project-card-button-github {
        left: 120px;
    }
    h4 {
        margin: 0;
    }

    @media only screen and (max-width : 700px) {
        font-size: 13px;
    }

`