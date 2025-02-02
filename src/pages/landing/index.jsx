import React, { useEffect, useState } from 'react';
import fullpage from 'fullpage.js';
import styled from 'styled-components';
import LandingHeader from "../../components/header/landing/index.jsx";
import First from "../../components/landing/first/index.jsx";
import Introduce from "../../components/landing/introduce/index.jsx";
import Role from "../../components/landing/role/index.jsx";
import Skill from "../../components/landing/skill/index.jsx";
import Method from "../../components/landing/method/index.jsx";
import {refreshAccessToken} from "../../lib/axiosInstance.js";
import {HealthCheck} from "../../api/auth.js";
import {useLocation} from "react-router-dom";

// 스타일 정의
const FullPageWrapper = styled.div`
    #fullpage {
        .section {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
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
    const [isScrolling, setIsScrolling] = useState(false); // 스크롤 상태 추가
    const [currentSection, setCurrentSection] = useState(0);

    const [isProxyReady, setIsProxyReady] = useState(false);
    const location = useLocation();

    const certification = async () =>{
        if (!isProxyReady) {
            console.warn("Proxy is not ready yet.");
            return; // 프록시가 준비되지 않았으면 요청하지 않음
        }
        const access = await refreshAccessToken();
        console.log(access);
        if(access){
            localStorage.setItem('accessToken', access);
            return true;
        }
        return false;
    }

    useEffect(() => {
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
    }, []);


    useEffect(() => {
        const checkAuth = () => {
            const instance = new fullpage('#fullpage', {
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                autoScrolling: true,
                navigation: true,
                credits: false,
                anchors: ['메인', '소개', '역할', '기능', '사용방법'],
                onLeave: (origin, destination, direction) => {
                    if (isScrolling) return;
                    setIsScrolling(true);
                    setCurrentSection(destination.index);

                    setIsAnimation([destination.index === 1, destination.index === 2]);

                    setTimeout(() => {
                        setIsScrolling(false);
                    }, 1000);
                },
            });

            setFpInstance(instance);
            return () => {
                if (instance) {
                    instance.destroy('all');
                }
            };
        };

        checkAuth();
    }, [location.pathname]);

    useEffect(() => {
        const moveToMain = async () =>{
            if (await certification()) {
                window.location.href = '/main';
            }
        }
        moveToMain();
    }, [isProxyReady]);

    const scrollToSection = (anchor) => {
        if (fpInstance) {
            fpInstance.moveTo(anchor);
        }
    };
    return (
        <FullPageWrapper>
            <LandingHeader index = {currentSection} change = {scrollToSection}/>
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