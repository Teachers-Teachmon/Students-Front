import React, {useEffect, useRef, useState} from 'react';
import fullpage from 'fullpage.js';
import styled from 'styled-components';
import LandingHeader from "../../components/header/landing/index.jsx";
import First from "../../components/landing/first/index.jsx";
import Introduce from "../../components/landing/introduce/index.jsx";
import Role from "../../components/landing/role/index.jsx";
import Skill from "../../components/landing/skill/index.jsx";
import Method from "../../components/landing/method/index.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import Loading from "../../components/loading/index.jsx";
import {Check, HealthCheck} from "../../api/auth.js";

// 스타일 정의
const FullPageWrapper = styled.div`
    #fullpage {
        .section {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
            transition: background-color 0.5s ease;
        }
    }
    .fp-watermark {
        display: none !important;
    }
    .fp-section {
        transform: translate3d(0, 0, 0);
    }
`;

const FullPageComponent = () => {
    const [fpInstance, setFpInstance] = useState(null);
    const [isAnimation, setIsAnimation] = useState([false, false]);
    const isScrolling = useRef(false);
    const [currentSection, setCurrentSection] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const location = useLocation();


    useEffect(() => {
        const checkAuth = () => {
            const instance = new fullpage('#fullpage', {
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                autoScrolling: true,
                navigation: true,
                credits: false,
                anchors: ['메인', '소개', '역할', '기능', '사용방법'],
                onLeave: (origin, destination) => {
                    if (isScrolling.current) return;

                    isScrolling.current = true;
                    fullpage_api.setAllowScrolling(false); // 스크롤 차단

                    setCurrentSection(destination.index);
                    setIsAnimation([destination.index === 1, destination.index === 2]);

                    setTimeout(() => {
                        isScrolling.current = false;
                        fullpage_api.setAllowScrolling(true); // 스크롤 다시 허용
                    }, 1000); // 2초 후 해제
                }
            });

            setFpInstance(instance);
            return () => {
                if (instance) {
                    instance.destroy('all');
                    fpInstance.destroy('all');
                }
            };
        };

        checkAuth();
    }, [location.pathname]);

    const scrollToSection = (anchor) => {
        if (fpInstance) {
            fpInstance.moveTo(anchor);
        }
    };


    const [isProxyReady, setIsProxyReady] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        setIsLoading(true);
        const checkHealth = async () => {
            try {
                const res = await HealthCheck();
                if(res === 200){
                    setIsProxyReady(true);
                }
            } catch (error) {
                console.error("Health check failed:", error);
            }
        };
        checkHealth();
        if(window.innerWidth < 600){
            navigate('/login');
        }
    }, []);

    useEffect(()=>{
        if(isProxyReady){
            checkUser();
        }
    }, [isProxyReady])

    const checkUser = async () =>{
        try {
            const res = await Check();
            if(res.data === "Authentication Success"){
                window.location.href = '/main';
            }
            else{
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }
    return (
        <FullPageWrapper>
            {isLoading ? <LoadingBox>
                <Loading />
            </LoadingBox> :  <LandingHeader index = {currentSection} change = {scrollToSection}/>}
            <div id="fullpage">
                <div className="section"><First /></div>
                <div className="section"><Introduce isAnimation={isAnimation[0]} /></div>
                <div className="section"><Role isAnimation={isAnimation[1]}/></div>
                <div className="section"><Skill /></div>
                <div className="section"><Method /></div>
            </div>
        </FullPageWrapper>
    );
};

export default FullPageComponent;

const LoadingBox = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 20;
`