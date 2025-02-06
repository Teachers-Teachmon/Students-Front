import styled from "styled-components";

export const EditContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
export const Content = styled.div`
    display: flex;
    height: 100%;
    width: 87%;
    flex-direction: column;
    padding: 0 50px;
`

export const EditTopLeft = styled.div`
    display: flex;
    gap: 15px;
`

export const EditTop = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    gap: 60px;
`

export const TopDate = styled.div`
    display: flex;
    gap: 20px;
    height: 40px;
    width: ${(props)=>props.$length}px;
`

export const TopDay = styled.div`
    display: flex;
    gap: 20px;
`

export const EditTopRight = styled.div`
    display: flex;
    gap: 25px;
`

export const FileBtn = styled.div`
    display: flex;
    gap: 15px;
`

export const FileDown = styled.button`
    display: flex;
    gap: 5px;
    width: 120px;
    height: 40px;
    background-color: white;
    border: 1px solid black;
    border-radius: 4px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
`

export const FileUp = styled.button`
    gap: 5px;
    display: flex;
    width: 120px;
    height: 40px;
    background-color: white;
    border: 1px solid black;
    border-radius: 4px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
`

export const FileUpBtn = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ReComBtn = styled.div`
    display: flex;
    gap: 15px;
`

export const Complete = styled.button`
    width: 120px;
    height: 40px;
    background-color: #2E6FF2;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
`

export const Reset = styled.button`
    width: 120px;
    height: 40px;
    background-color: #2E6FF2;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
`

export const EditContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const EditMainTop = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    gap: 20px;
    background-color: #c9dbff;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    align-items: center;
    padding: 25px;
    color: gray;

    p{
        color: #F87067;
    }
`

export const TopData = styled.span`
    width: ${(props)=>props.$length}px;
`

export const EditMain = styled.div`
    display:  flex;
    flex-direction: column;
    gap: 50px;
    overflow-y: auto;
    max-height: 700px;
    position: relative;
`

export const EditRow = styled.div`
    display:  flex;
    border: 1px solid #cccccc;
    padding: 20px 33px;
    align-items: center;
`

export const RowData = styled.div`
    display:  flex;
    align-items: center;
    width: ${(props)=>props.$length}px;
`

export const Grade = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`

export const EditMainData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const PlusBtn = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 0 3px 0;
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #2E6FF2;
    align-items: center;
    border: 1px solid #2E6FF2;
    border-radius: 4px;
    margin-left: 570px;
    margin-top: 50px;

`

export const ClassData = styled.input`
    width: 250px;
    height: 40px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 15px 20px;
    color: gray;
`

export const DetailBtn = styled.button`
    display: flex;
    width: 100px;
    height: 35px;
    background-color: white;
    border: 1px solid black;
    border-radius: 4px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
`

export const ModalOverlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`

export const ModalContent = styled.div`
    width: 700px;
    height: 650px;
    border-radius: 10px;
    padding: 50px;
    background-color: white;
`

export const ModalContentTop = styled.div`
    display: flex;
    gap: 400px;
`

export const InputBox = styled.div`
    border: 1px solid #ccc;
    width: 250px;
    border-radius: 8px;
    padding: 10px 15px;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    font-size: 14px;
    position: relative;
`
export const Input = styled.input`
    border: none;
    width: 100%;
    outline: none;
`

export const StudentList = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    max-height: 180px;
    z-index: 3;
    overflow-y: scroll;
    background: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: #B0BEC5 #F5F5F5; /* 스크롤바 색상 (Foreground/Background) */

    /* Chrome, Safari, Edge */

    &::-webkit-scrollbar {
        width: 8px; /* 스크롤바 너비 */
    }

    &::-webkit-scrollbar-track {
        background: #F5F5F5; /* 트랙 색상 */
        border-radius: 8px; /* 트랙 둥글게 */
    }

    &::-webkit-scrollbar-thumb {
        background: #B0BEC5; /* 스크롤바 색상 */
        border-radius: 8px; /* 스크롤바 둥글게 */
        border: 2px solid #F5F5F5; /* 스크롤바와 트랙 간 간격 */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #90A4AE; /* Hover 시 스크롤바 색상 */
    }
    
`
export const StudentItem = styled.div`
    width: 100%;
    cursor: pointer;
    padding: 10px 20px;
    &:hover {
        background: #F2F3F6;
    }
`

export const DropdownFL = styled.div`
    display: flex;
    gap: 10px;
`

export const ModalLeft = styled.div`
    width: 200px;
    height: 158px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ModalRight = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ModalMain = styled.div`
    display: flex;
    margin-top: 50px;
    gap: 10px;
`

export const StudentBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-left: -200px;
    overflow-y: auto;
    max-height: 270px;
`
export const Student = styled.div`
    border: 2px solid #2E6FF2;
    color: #2E6FF2;
    background: white;
    padding: 7px 12px;
    border-radius: 30px;
    font-weight: 550;
    cursor: pointer;
    height: max-content;
`

export const Class = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;

    p{
        font-size: 25px;
    }
`

export const ClassMain = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`

export const OptionButton = styled.img`
    width: 15px;
    
`

export const Options = styled.div`
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    border: 1px solid #cccccc;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    margin-top: 105px;
    margin-left: 998px;
    
    button {
        border: 1px;
        padding: 10px 10px;
        width: 100px;
        background-color: #fff;
        cursor: pointer;
        border-right: 1px solid #cccccc;

    }

    button:hover {
        background-color: #f0f0f0;
    }

    button{
        border-right: none; 
    }
    
`

export const Btn = styled.div`
    display: flex;
    margin-left: 350px;
    gap: 20px;
`