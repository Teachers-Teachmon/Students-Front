import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 13%;
    height: 100vh;
    padding: 3% 0;
    background-color: #EBF1FF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 400px) {
        display: none;
    }
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
    padding: 7% 20%;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: 0.2s;
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

export const Bottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    gap: 15%;
    margin-top: auto;
`

export const BottomProfile = styled.img`
    width: 24%;
    border-radius: 50%;
`

export const BottomText = styled.a`
    white-space: nowrap;
    cursor: pointer;
    text-decoration: none;
    color: blue;
`

export  const Logout = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    width: 100%;
    padding: 7% 20%;
    justify-content: center;
    transition: 0.2s;
    font-size: 16px;
    &:hover {
        background-color: #dce4ff;
    }
`