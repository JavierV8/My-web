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
    .home-button-first {
        margin-right: 20px;
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
    .index-link {
        padding-top: 10px;
        width: 50px;
        height: 50px;
        position: relative;
        text-align: center;
        cursor: pointer;
    }
    .index-link-img {
        width: 30px;
        height: 30px;
        padding: 0
        margin: 0;
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
        width: 100vw;
        height: 100vh;
        display: block
        top: 0;
        left: 0;

        .index-face-box {
            margin: auto;
            margin-top: 0%;
            width: 90vw;
            height: 90vw;
        }
        .imageCara {
            margin-bottom: -5px;
            padding: 0;
        }
        .index-text-box {
            text-align: center;
            transition: opacity 5000ms ease-out;
            transition-delay: 1000ms;
            opacity: ${pr=> (pr.isVisible ? 0 : 1)};
        }
        .index-text-1 {
            display: none;
        }
        .index-text-2 {
            font-size: 12vw;
            font-weight: bold;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            height: 13vw;
            margin: 0;
            margin-top: -8%;
            padding: 0;
        }
        .index-text-3 {
            width: 95vw;
            margin: auto;
            margin-top: 5vw;
            font-size: 6vw;
            line-height: 1.1;
            font-weight: 300;
        }
        .index-text-4 {
            font-size: 4vw;
            font-weight: 600;
        }
        .home-button-first {
            left: 130px;
        }
        .index-button {
            bottom: 3vh;
            font-size: 3.8vw;
            font-weight: 400;
            border-radius: 1.5vw;
            background: #0066ff;
            border: none;
            padding: 3vw;
            color: white;
            cursor: pointer;
            z-index: 1;
            margin: 30px;
        }
        .live {
            left: 40vw;
        }
        .index-links {
            display: flex;
            position: absolute;
            bottom: 10px;
            width: 50%;
            margin: auto;
            left: 50%;
            transform: translateX(-50%);
        }
        .index-link {
            margin: auto;
            width: 40px;
            height: 40px;
            position: relative;
            cursor: pointer;
        }
        .index-link-img {
            width: 40px;
            height: 40px;
            padding: 0
            margin: 0;
        }


        .carousel-word {
            height: 9vw;
            font-size: 3.8vw;
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
            height: ${pr => pr.boxWidth * 0.05}px;
        }

        /* Minimum aspect ratio */
        @media (min-aspect-ratio: 3/5) {
            .index-face-box {
                margin: auto;
                margin-top: 0%;
                width: 70vw;
                height: 70vw;
            }
            .index-text-2 {
                font-size: 70px;
                font-weight: bold;
                margin-bottom: -25px;
                margin-top: -5%;
                padding: 0;
                height: 100px;
            }
            .index-text-3 {
                margin-top: 20px;
                font-size: 30px;
                width: 80vw;
            }
            .carousel-word {
                height: 55px;
                font-size: 22px;
            }
            .index-button {
                font-size: 3.5vw;
                padding: 2vw;
            }
        }

        @media (min-aspect-ratio: 4/5) {
            .index-face-box {
                margin: auto;
                margin-top: 0%;
                width: 60vw;
                height: 60vw;
            }
            .index-text-2 {
                font-size: 70px;
                font-weight: bold;
                margin-bottom: -25px;
                margin-top: -5%;
                padding: 0;
                height: 100px;
            }
            .index-text-3 {
                margin-top: 20px;
                font-size: 35px;
                width: 80vw;
            }
            .carousel-word {
                height: 55px;
                font-size: 22px;
            }
            .element {
                padding: 0;
                margin: 0;
                height: ${pr => pr.boxWidth * 0.12}px;
            }



            .index-button {
                font-size: 16px;
                padding: 2vw;
            }
            .element {
                padding: 0;
                margin: 0;
                height: ${pr => pr.boxWidth * 0.05}px;
        }
        }
`;