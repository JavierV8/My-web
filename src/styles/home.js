import styled, { keyframes } from 'styled-components';

const kf = keyframes`
	0%, 15% {
		transform: translateY(0);
	}
	20%,55% {
		transform: translateY(-25%);
	}
	60%,90% {
		transform: translateY(-50%);
	}
	95%,100% {
		transform: translateY(-75%);
	}
`;

export const LoadingIndexPageStyle = styled.div`
    position fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgb(238, 238, 238);
    z-index: 1;
    transition: opacity 2000ms ease-out;
    opacity: ${pr=> (pr.isVisible ? 1 : 0)};
    display: ${pr=> (pr.isVisible ? 'inline' : 'none')};

    div {
        position: relative;
        width: 10vw;
        left: 50%;
        top 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-size: 2vw;
        transition: opacity 0ms ease-out;
        opacity: ${pr=> (pr.isVisible ? 1 : 0)};
    }
`;


export const IndexStyleLandscape = styled.div`
    margin: auto;
    max-width: 1400px;
    width: 80%;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Montserrat', 'Helvetica';
    color: #2e2e2e;
    
    .index-face-box {
        flex: 1;
    }
    .imageCara {
        margin-bottom: -5px;
        padding: 0;
    }
    .index-text-box {
        flex: 1;
        transition: opacity 5000ms ease-out;
        transition-delay: 1000ms;
        opacity: ${pr=> (pr.isVisible ? 0 : 1)};
    }
    .index-text-1 {
        margin-top: ${pr => pr.boxWidth * 0.05}px;
        font-size:  ${pr => pr.boxWidth * 0.05}px;
        font-weight: 300;

        font-size: ${pr => pr.boxWidth * 0.09}px;
        font-weight: 300;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        height: ${pr => pr.boxWidth * 0.1}px;
    }
    .index-text-2 {
        font-size: ${pr => pr.boxWidth * 0.11}px;
        font-weight: bold;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        height: ${pr => pr.boxWidth * 0.13}px;
    }
    .index-text-3 {
        width: 90%;
        margin-top: ${pr => pr.boxWidth * 0.03}px;
        font-size: ${pr => pr.boxWidth * 0.04}px;
        line-height: 1.1;
        font-weight: 300;
    }
    .index-text-4 {
        font-size: ${pr => pr.boxWidth * 0.034}px;
        font-weight: 600;
    }
    .index-button {
        margin-top: ${pr => pr.boxWidth * 0.12}px;
        font-size: ${pr => pr.boxWidth * 0.035}px;
        font-weight: 100;
        background: #0066ff;
        border: none;
        border-radius: ${pr => pr.boxWidth * 0.01}px;
        padding: ${pr => pr.boxWidth * 0.018}px;
        color: white;
        cursor: pointer;
    }
    .live {
        margin-left: ${pr => pr.boxWidth * 0.03}px;
    }
    .index-links {
        display: flex;
    }
    .index-github {
        width: ${pr => pr.boxWidth * 0.15}px;
        height: ${pr => pr.boxWidth * 0.15}px;
        position: relative;
        text-align: center;
        cursor: pointer;
    }
    .index-info {
        font-size: ${pr => pr.boxWidth * 0.025}px;
        font-weight: bold;
        padding: 0;
        margin: 0;
        position: absolute;
        bottom: 0%;
        width: ${pr => pr.boxWidth * 0.15}px;
    }
    .index-github-img {
        width: ${pr => pr.boxWidth * 0.13}px;
        height: ${pr => pr.boxWidth * 0.13}px;
        padding: 0
        margin: 0;
    }
    .index-codeSandBox-img {
        width: ${pr => pr.boxWidth * 0.085}px;
        height: ${pr => pr.boxWidth * 0.085}px;
        padding: 0
        margin: 0;
        margin-top: 15%;
    }
    
    
    .carousel-word {
        height: ${pr => pr.boxWidth * 0.12}px;
        font-size: ${pr => pr.boxWidth * 0.035}px;
        overflow: hidden;
    }
    .carousel-word h1{
        font-family: 'Montserrat', 'Helvetica';
        font-weight: 300;
    }
    .change_inner {
        position: relative;
        animation: ${kf} 15s ease-in-out infinite;
    }
    .element {
        padding: 0;
        margin: 0;
        height: ${pr => pr.boxWidth * 0.12}px;
    }
`;

export const IndexStylePotrait = styled.div`
        width: 100vh;
        height: 99vh;
        display: block
        top: 0;
        left: 0;

        .index-face-box {
                width: 100vh;
                height: 100vh;
                opacity: 0.3;
                position: relative;
                left: -5%;
                top: 15%;
        }
            .imageCara {
                margin-bottom: -5px;
                padding: 0;
        }
            .index-text-box {
                position: absolute;
                top: 0;
                transition: opacity 5000ms ease-out;
                transition-delay: 1000ms;
                padding-left: 5vw;
                opacity: ${pr=> (pr.isVisible ? 0 : 1)};
        }
    
        .index-text-1 {
                margin-top: 10vh;
                font-size:  8vw;
                font-weight: 300;

                margin-top: 10vh;
                font-size: 11vw;
                font-weight: 300;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                height: 10vw;
        }
        .index-text-2 {
                font-size: 13vw;
                font-weight: bold;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                height: 13vw;
                margin: 0;
                padding: 0;
        }
        .index-text-3 {
                width: 95vw;
                margin-top: 1vw;
                font-size: 7vw;
                line-height: 1.1;
                font-weight: 300;
        }
        .index-text-4 {
                font-size: 4vw;
                font-weight: 600;
        }
        .index-button {
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
        .live {
                left: 40vw;
        }
        .index-links {
            display: flex;
        }
        .index-github {
            width: ${pr => pr.boxWidth * 0.1}px;
            height: ${pr => pr.boxWidth * 0.1}px;
            position: relative;
            text-align: center;
            cursor: pointer;
        }
        .index-info {
            font-size: ${pr => pr.boxWidth * 0.015}px;
            font-weight: bold;
            padding: 0;
            margin: 0;
            position: absolute;
            bottom: 0%;
            width: ${pr => pr.boxWidth * 0.1}px;
        }
        .index-github-img {
            width: ${pr => pr.boxWidth * 0.1}px;
            height: ${pr => pr.boxWidth * 0.1}px;
            padding: 0
            margin: 0;
        }
        .index-codeSandBox-img {
            width: ${pr => pr.boxWidth * 0.065}px;
            height: ${pr => pr.boxWidth * 0.065}px;
            padding: 0
            margin: 0;
            margin-top: 15%;
        }
        .index-portrait-bar {
            position: absolute;
            bottom: 0;
            width: 100vw;
            height: 11vh;
            background #383838;
            display: none;
        }



        .carousel-word {
                height: 18vw;
                font-size: 4.5vw;
                overflow: hidden;
        }
            
        .carousel-word h1{
                font-family: 'Montserrat', 'Helvetica';
                font-weight: 300;
        }
        .change_inner {
                position: relative;
                animation: ${kf} 15s ease-in-out infinite;
        }
        .element {
                padding: 0;
                margin: 0;
                height: ${pr => pr.boxWidth * 0.12}px;
        }
`;