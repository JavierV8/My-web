import React, {useState, useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import { AboutStyleLandscape, AboutStylePotrait } from '../styles/aboutStyle';

const About = () => {
    const imgRef = useRef(null);
    const [isPotrait, setIsPotrait] = useState(false);
    const [isMobile, setIsmobile] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            setIsmobile(true);
           }
    }, [])

    useEffect(() => {
        const resizeHandler = () => {
            if(window.innerHeight > window.innerWidth){
                setIsPotrait(true);
            } else {
                setIsPotrait(false);
            }
        }
        window.addEventListener('resize', resizeHandler);
        resizeHandler();

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            imgRef.current.style.transform = 'translateX(0%)';
        }, 500);
        const animation = () => {
            setTimeout(() => {
                imgRef.current.style.transform = 'translateX(0%)';
            }, 600);
        }

        window.addEventListener("orientationchange", animation);

        return () => {
            window.removeEventListener("orientationchange", animation);
        }

    }, [isPotrait]);

    const AboutStyle = isPotrait ? AboutStylePotrait : AboutStyleLandscape;
    return (
        <>
            <AboutStyle isMobile={isMobile}>
                <div className="about-image">
                {!isPotrait && <h1>About Me</h1>}
                   <div className="about-image-box"><img src={`../images/about.png`} ref={imgRef} alt=""></img></div>
                </div>
                <div className="about-text">
                    {isPotrait ? <h1>About Me</h1> : <h1>...</h1>}
                    <h3 className='about-subtitle'>I wish I were a little kid so I could take a long nap, and when I wake up, people would just be proud of me.</h3>
                    <p>Hello readers!! as your already knew naps represent me, I do love sleep, but technology also represents me and this is why you ended up reading this.</p>
                    <p>I am from Pamplona where the bigger "fiestas" in the world take place, that also represents me! but this is for another story. After had few years stumbling between jobs and education in a career, one day I joined a code course where I fell in love and decided that I wanted to develop my career in technology, So I joined a degree in Robotics.</p>
                    <p>Of all technologies I have learned, JavaScript and web technologies in general are the ones that have attracted me the most, that why I decided to specialize in JavaScript. Now I spend countless hours writing JavaScript for the company I work for and in the evenings for open-source projects. I feel like I achieved my goal of becoming a competent programmer, but in technology there is always the need to keep up, that's one reason I contribute in open-source projects where I can learn something from them and level up my skills.</p>
                    <p>When I’m not coding, I’m running or skiing, I did some races in the past of both. I love mountains and snow but it catches my attention more and more the beach and the sun, am I getting old? I am motivated to go to the gym before work to get fit and healthy. NO WAY! I told you I like my bed more than I like most people! but when I’m not coding, running or skiing I go to the gym. I believe this is all! well I also do love food, also represents me! but because I am getting old and boring, I try to eat healthy...</p>
                </div>
                <button className="about-goHome-button" onClick={() => history.push('/')}>{'Go Home'}</button>
            </AboutStyle>
        </>
    )
}

export default About;