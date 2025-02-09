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
    padding: 0 3%;
`

export const EditTopLeft = styled.div`
    display: flex;
    gap: 15px;
`

export const EditTop = styled.div`
    display: flex;
    width: 100%;
    height: 13vh;
    align-items: center;
    gap: 4%;
`

export const Link = styled.input`
    display: flex;
    padding: 3%;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 4.9vh;
`

export const TopDate = styled.div`
    display: flex;
    gap: 20px;
    height: 4.9vh;
    width: ${(props)=>props.$length}vw;
`

export const TopDay = styled.div`
    display: flex;
    gap: 20px;
    cursor: pointer;
`

export const EditTopRight = styled.div`
    display: flex;
    gap: 25px;
`

export const FileBtn = styled.div`
    display: flex;
    gap: 15px;
`

export const UpImg = styled.img`
    cursor: pointer;
`

export const DownImg = styled.img`
    cursor: pointer;
`

export const FileDown = styled.button`
    display: flex;
    gap: 5px;
    width: 8.5vw;
    height: 5vh;
    background-color: white;
    border: 1px solid black;
    border-radius: 4px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const FileUp = styled.button`
    gap: 5px;
    display: flex;
    width: 8.5vw;
    height: 5vh;
    background-color: white;
    border: 1px solid black;
    border-radius: 4px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const FileUpBtn = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ReComBtn = styled.div`
    display: flex;
    gap: 15px;
`

export const Complete = styled.button`
    width: 8.5vw;
    height: 5.2vh;
    background-color: #2E6FF2;
    color: white;
    border: none;
    padding: 3% 5%;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
`

export const Reset = styled.button`
    width: 8.5vw;
    height: 5.2vh;
    background-color: #2E6FF2;
    color: white;
    border: none;
    padding: 3% 5%;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
`

export const EditContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const EditMainTop = styled.div`
    display: flex;
    width: 100%;
    height: 5vh;
    gap: 20px;
    background-color: #c9dbff;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    align-items: center;
    padding: 2.2%;
    color: gray;

    p{
        color: #F87067;
    }
`

export const TopData = styled.span`
    width: ${(props)=>props.$length}vw;
`

export const EditMain = styled.div`
    display:  flex;
    flex-direction: column;
    gap: 50px;
    overflow-y: auto;
    max-height: 80vh;
    position: relative;
`

export const EditRow = styled.div`
    display:  flex;
    border: 1px solid #cccccc;
    padding: 2% 3%;
    align-items: center;
`

export const RowData = styled.div`
    display:  flex;
    align-items: center;
    width: ${(props)=>props.$length}vw;
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
    padding: 0 0 0.3% 0;
    width: 1.8vw;
    height: 3.1vh;
    font-size: 25px;
    color: #2E6FF2;
    align-items: center;
    border: 1px solid #2E6FF2;
    border-radius: 4px;
    margin-left: 48%;
    margin-top: 5%;
    cursor: pointer;

`

export const ClassData = styled.input`
    width: 22vw;
    height: 4.8vh;
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 1.5% 2%;
    color: gray;
`

export const ModalOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`

export const ModalContent = styled.div`
    width: 50%;
    height: max-content;
    border-radius: 10px;
    padding: 4%;
    background-color: white;
`

export const ModalContentTop = styled.div`
    display: flex;
    gap: 40%;
`

export const InputBox = styled.div`
    border: 1px solid #ccc;
    width: 15vw;
    border-radius: 8px;
    padding: 2.5% 2%;
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
    max-height: 40vh;
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
    padding: 4%;
    &:hover {
        background: #F2F3F6;
    }
`

export const DropdownFL = styled.div`
    display: flex;
    gap: 10px;
`

export const ModalLeft = styled.div`
    width: 40%;
    height: 16%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ModalRight = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ModalMain = styled.div`
    display: flex;
    margin-top: 6%;
    gap: 10px;
`

export const StudentBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-left: -50%;
    overflow-y: auto;
    max-height: 30vh;
`
export const Student = styled.div`
    border: 2px solid #2E6FF2;
    color: #2E6FF2;
    background: white;
    padding: 1.7% 2%;
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
    width: 1.5%;
    cursor: pointer;
    
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
    margin-top: 9%;
    margin-left: 88.5%;
    
    button {
        border: 1px;
        padding: 10%;
        width: 6.5vw;
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
    margin-left: 55%;
    gap: 20px;
`

export const Black = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
`