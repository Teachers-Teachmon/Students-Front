import React, { useEffect, useState } from 'react';
import fullpage from 'fullpage.js';
import styled from 'styled-components';
import LandingHeader from "../../components/header/landing/index.jsx";
import First from "../../components/landing/first/index.jsx";
import Introduce from "../../components/landing/introduce/index.jsx";
import Role from "../../components/landing/role/index.jsx";
import Skill from "../../components/landing/skill/index.jsx";
import Method from "../../components/landing/method/index.jsx";

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
`;

const FullPageComponent = () => {
    const [fpInstance, setFpInstance] = useState(null);
    const [isAnimation, setIsAnimation] = useState([false, false]);
    const [isScrolling, setIsScrolling] = useState(false); // 스크롤 상태 추가
    const [currentSection, setCurrentSection] = useState(0);

    useEffect(() => {
        const instance = new fullpage('#fullpage', {
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE', // 무료 라이센스 키
            autoScrolling: true,
            navigation: true,
            credits: false,
            anchors: ['메인', '소개', '역할', '기능', '사용방법'], // 앵커 설정
            onLeave: (origin, destination, direction) => {
                if (isScrolling) return; // 현재 스크롤 중이면 이동하지 않음
                setIsScrolling(true); // 스크롤 중으로 설
                setCurrentSection(destination.index);
                if (destination.index === 1) {
                    setIsAnimation([true, false]);
                } else if(destination.index === 2){
                    setIsAnimation([false, true]);
                } else {
                    setIsAnimation([false, false]);
                }

                setTimeout(() => {
                    setIsScrolling(false); // 1초 후 스크롤 가능하게 설정
                }, 1000); // 1초 후 스크롤 가능하게 설정
            },
        });

        setFpInstance(instance);

        return () => {
            if (instance) {
                instance.destroy('all');
            }
        };
    }, []);

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