import styled from 'styled-components';

export const ProjectCardStyle = styled.li`

    border: 2px solid #e6e6e6;
    display: flex;
    margin: 10px;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 10px;
    

    .list-content {
        position: relative;
        width: 100%;
        border-raidus: 10px:
    }

    img {
        width: 100%;
    }
    h3 {
        margin-left: 20px;
        font-size: 22px;
        font-weight: 400;
    }
    p{
        margin-left: 20px;
        margin-right: 20px;
        font-size: 18px;
        font-weight: 100;
        color: black;
    }
    .project-card-tools {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 20px;
        width: 90%;
        margin-bottom: 100px;
    }
    .projectCard-tool {
        position: relative;
        margin: 0;
        font-size: 14px;
        padding: 5px;
        border-radius: 5px;
        margin: 5px;
        background: #d6d6d6;
        font-weight: 400;
    }
    button {
        position: absolute;
        bottom: 0;
        font-size: 18px;
        padding: 10px;
        border: 2px solid #e6e6e6;
        background: none;
        border-radius: 5px;
        margin-left: 20px;
        margin-bottom: 20px;
        cursor: pointer;
    }
    button:hover {
        color: white;
        background: black;
        border: 2px solid black;
    }
    .project-card-button-github {
        left: 120px;
    }
    h4 {
        margin: 0;
    }
    @media only screen and (max-width : 1200px) {
        margin: 0;
    }
    @media only screen and (max-width : 700px) {
        font-size: 13px;
    }

`