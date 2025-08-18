import styled from "styled-components";
import {mq} from "../../styles/media.js";

export const HeaderContainer = styled.div`
    width: 13%;
    height: 100vh;
    padding: 3% 0;
    background-color: #EBF1FF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    ${mq.mobile}{
      display: none;
    }
`

export const Logo = styled.img`
    cursor: pointer;
    width: 90%;
`
export const Hr = styled.div`
  width: calc(100% - 24px);
  height: 1px;
  margin-top: 15%;
  background-color: #9CA4BA;
`
export const NavList = styled.div`
    margin-top: 15%;
    display: flex;
  padding: 0 12px;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    align-items: center;
`

export const MenuItem = styled.div`
    width: 100%;
    padding: 5% 15%;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: 0.2s;
    border-radius: 12px;
    &:hover {
        background-color: ${({ $active }) => ($active ? '#A2C2FF' : '#dce4ff')};
    }
    background-color: ${({ $active }) => ($active ? '#C7DAFF' : '')};
    color: ${({ $active }) => ($active ? '#2E6FF2' : '#9CA4BA')};
    font-weight: 500;
`

export const MenuIcon = styled.img`
    width: 24px;
    height:24px;
    margin-right: 8px;
  filter: ${({ $active }) =>
    $active
      ? 'invert(44%) sepia(91%) saturate(5326%) hue-rotate(209deg) brightness(92%) contrast(92%)'
      : 'none'}; // 다른 색상의 SVG를 가져오지 않고 filter로 색변경 하기(GPT 참고)
`

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: auto;
    flex-direction: column;
    
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        gap: 15%;
    }
`

export const BottomProfile = styled.img`
    width: 24%;
    border-radius: 50%;
`

export const BottomText = styled.a`
    white-space: nowrap;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
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