import styled from "styled-components";

export const ManageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
`
export const Wrap = styled.div`
    width : 87%;
    height: 100%;
    padding: 40px 6%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 400px) {
        width: 100%;
    }
`
export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    & > h1{
        @media (max-width: 400px) {
            font-size: 28px;
        }
    }
`


export const Main = styled.main`
    width: 100%;
    height: 90%;
    border: 2px solid #EAECF0;
    border-radius: 8px;
`

export const MainNav = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    padding: 30px 20px;
    justify-content: space-between;
`
export const NoData = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #667085;
    text-align: center;
`

export const MainBox = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 400px) {
        gap: 5px;
    }
`
export const Grade = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
`
export const Color = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    @media (max-width: 400px) {
        display: none;
    }
`

export const Colors = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5px;
    align-items: center;
`

export const Status = styled.p`
    font-size: 14px;
    font-weight: 500;
`
export const ColorBox = styled.div`
    width: 20px;
    height: 20px;
    background: ${(props)=>props.color};
    box-shadow: 0 0 0.2px 0.2px;
`
export const Record = styled.div`
    background: #2E6FF2;
    display: flex;
    align-items: center;
    padding: 5px 15px;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
        background: #2a65dd;
    }
    @media (max-width: 400px) {
        padding: 4px;
        font-size: 12px;
        border-radius: 4px;
    }
`
export const Section = styled.section`
    width: 100%;
    height: 90%;
    display: flex;
    flex-flow: wrap row;
    @media (max-width: 400px) {
        overflow-y: scroll;
    }
`

export const Black = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0, 0, 0, 0.4);
    z-index: 3;
`