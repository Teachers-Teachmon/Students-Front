import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 13%;
    height: 100vh;
    padding: 5% 0;
    background-color: #EBF1FF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const Logo = styled.img`
    cursor: pointer;
    width: 90%;
`

export const NavList = styled.div`
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    align-items: center;
`

export const MenuItem = styled.div`
    width: 100%;
    padding: 10% 0;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #dce4ff;
    }
    background-color: ${({ $active }) => ($active ? '#C7DAFF' : '')};
    color: ${({ $active }) => ($active ? '#2E6FF2' : '')};
    font-weight: ${({ $active }) => ($active ? 'bold' : '')};
`

export const MenuIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    filter: ${({ $active }) => ($active 
        ? 'invert(30%) sepia(83%) saturate(2500%) hue-rotate(210deg) brightness(93%) contrast(97%)'
        : 'none'
    )}; // 다른 색상의 SVG를 가져오지 않고 filter로 색변경 하기(GPT 참고)
`