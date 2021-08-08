import styled from 'styled-components';

export const ProjectCardStyle = styled.li`

    border: 2px solid #e6e6e6;
    display: flex;
    margin: 5px;
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
    .project-card-img {
        width: 25px;

        left: 3px;
        margin-left: 0; /* 1/2 of total width of your img */
        top: 50%;
        margin-top: -13px; /* 1/2 of total height of your img */
        position: absolute;
    }

    .project-card-commit {
        font-size: 13px;
    }
    h3 {
        margin: 0;
        margin-left: 20px;
        font-size: 22px;
        font-weight: 400;
    }
    p{
        margin: 10px;
        margin-left: 20px;
        margin-right: 20px;
        font-size: 16px;
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
        margin-top: 0;
    }
    .projectCard-tool {
        position: relative;
        margin: 0;
        font-size: 10px;
        padding: 5px;
        border-radius: 5px;
        margin: 5px;
        background: #ededed;
        font-weight: 500;
    }
    button {
        position: absolute;
        bottom: 0;
        font-size: 18px;
        padding: 10px;
        padding-left: 30px;
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
        .project-card-img {
            filter: invert(100%);
        }
    }
    .project-card-button-github {
        left: 140px;
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