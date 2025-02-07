import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 370px;
    gap:20px;
    background: white;
    border-radius: 10px;
    padding: 50px;
`

export const ClassTop = styled.div`
    display: flex;
    gap: 20px;

`

export const ChangeClass = styled.h4`
    margin-top: 7px;
`

export const Buttons = styled.div`
    display: flex;
    margin-left: 150px;
    margin-top: 60px;
    gap: 2rem;
`

export const DateMain = styled.div`
    margin-left: -150px;
`

export const Place = styled.div`
    display: flex;
    gap: 20px;
`

export const DropdownContainer = styled.div`
    width: 150px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5px 15px;
    cursor: pointer;
    align-items: center;
    transition: all 0.3s ease;
    gap: 5px;
    font-size: 14px;
    &:hover {
        border-color: #aaa;
    }
    position: relative;
`

export const DropdownTitle = styled.div`
    display: flex;
    /* gap: 40px; */
    align-items: center;
    display: flex;
`

export const Period = styled.p`
    width: ${(props)=>props.$length}px;
`

export const DropdownImg = styled.img`
    width: ${(props)=>props.$length}px;
`

export const Class = styled.p`
    width: ${(props)=>props.$length}px;
`

export const DropdownImg2 = styled.div`
    display: flex;
    
`

export const DropdownMenu = styled.ul`
    position: absolute;
    top: 35px;
    left: 0;
    list-style: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    z-index: 11;
    display: flex;
    flex-direction: column;
    margin-top: 7px;
`;

export const DropdownItem = styled.li`
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 150px;
    z-index: 10;
    &:hover {
        background-color: #f0f0f0;
    }
`;

export const DropdownContainer2 = styled.div`
    width: 430px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 8px;
    cursor: pointer;
    align-items: center;
    transition: all 0.3s ease;
    gap: 5px;
    font-size: 14px;
    &:hover {
        border-color: #aaa;
    }
    position: relative;
`

export const DropdownTitle2 = styled.div`
    display: flex;
    /* gap: 320px; */
    align-items: center;
    display: flex;
`

export const DropdownMenu2 = styled.ul`
    position: absolute;
    top: 35px;
    left: 0;
    list-style: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    z-index: 11;
    display: flex;
    flex-direction: column;
    margin-top: 7px;
`;

export const DropdownItem2 = styled.li`
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 150px;
    z-index: 10;
    &:hover {
        background-color: #f0f0f0;
    }
`;