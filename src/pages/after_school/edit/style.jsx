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
    padding: 0 3.125rem;
`

export const EditTopLeft = styled.div`
    display: flex;
    gap: 0.9375rem;
`

export const EditTop = styled.div`
    display: flex;
    width: 100%;
    height: 6.25rem;
    align-items: center;
    gap: 2.5rem;
`

export const Link = styled.input`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    width: 8.75rem;
    height: 2.5rem;
`

export const TopDate = styled.div`
    display: flex;
    gap: 1.25rem;
    height: 2.5rem;
    width: ${(props)=>props.$length}px;
`

export const TopDay = styled.div`
    display: flex;
    gap: 1.5625rem;
    cursor: pointer;
`

export const EditTopRight = styled.div`
    display: flex;
    gap: 1.5625rem;
`

export const FileBtn = styled.div`
    display: flex;
    gap: 0.9375rem;
`

export const UpImg = styled.img`
    cursor: pointer;
`

export const DownImg = styled.img`
    cursor: pointer;
`

export const FileDown = styled.button`
    display: flex;
    gap: 0.3125rem;
    width: 7.5rem;
    height: 2.5rem;
    background-color: white;
    border: 0.0625rem solid black;
    border-radius: 0.25rem;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const FileUp = styled.button`
    gap: 0.3125rem;
    display: flex;
    width: 7.5rem;
    height: 2.5rem;
    background-color: white;
    border: 0.0625rem solid black;
    border-radius: 0.25rem;
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
    gap: 0.9375rem;
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
    cursor: pointer;
`

export const Reset = styled.button`
    width: 7.5rem;
    height: 2.5rem;
    background-color: #2E6FF2;
    color: white;
    border: none;
    padding: 0.5rem 0.9375rem;
    border-radius: 0.625rem;
    align-items: center;
    justify-content: center;
    font-size: 0.9375rem;
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
    height: 2.5rem;
    gap: 1.25rem;
    background-color: #c9dbff;
    border-top-right-radius: 0.375rem;
    border-top-left-radius: 0.375rem;
    align-items: center;
    padding: 1.5625rem;
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
    gap: 3.125rem;
    overflow-y: auto;
    max-height: 43.75rem;
    position: relative;
`

export const EditRow = styled.div`
    display:  flex;
    border: 0.0625rem solid #cccccc;
    padding: 1.25rem 2.0625rem;
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
    gap: 1.875rem;
`

export const EditMainData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const PlusBtn = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 0 0.1875rem 0;
    width: 1.5625rem;
    height: 1.5625rem;
    font-size: 1.5625rem;
    color: #2E6FF2;
    align-items: center;
    border: 0.0625rem solid #2E6FF2;
    border-radius: 0.25rem;
    margin-left: 35.625rem;
    margin-top: 3.125rem;
    cursor: pointer;

`

export const ClassData = styled.input`
    width: 18.75rem;
    height: 2.5rem;
    border: 0.0625rem solid #cccccc;
    border-radius: 0.25rem;
    padding: 0.9375rem 1.25rem;
    color: gray;
`

export const DetailBtn = styled.button`
    display: flex;
    width: 6.25rem;
    height: 2.1875rem;
    background-color: white;
    border: 0.0625rem solid black;
    border-radius: 0.25rem;
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
    width: 43.75rem;
    height: max-content;
    border-radius: 0.625rem;
    padding: 3.125rem;
    background-color: white;
`

export const ModalContentTop = styled.div`
    display: flex;
    gap: 25rem;
`

export const InputBox = styled.div`
    border: 0.0625rem solid #ccc;
    width: 15.625rem;
    border-radius: 0.5rem;
    padding: 0.625rem 0.9375rem;
    display: flex;
    justify-content: flex-start;
    gap: 0.625rem;
    font-size: 0.875rem;
    position: relative;
`
export const Input = styled.input`
    border: none;
    width: 100%;
    outline: none;
`

export const StudentList = styled.div`
    position: absolute;
    top: 3.125rem;
    left: 0;
    width: 100%;
    max-height: 6.25rem;
    z-index: 3;
    overflow-y: scroll;
    background: white;
    border: 0.0625rem solid #ccc;
    border-radius: 0.5rem;
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: #B0BEC5 #F5F5F5; /* 스크롤바 색상 (Foreground/Background) */

    /* Chrome, Safari, Edge */

    &::-webkit-scrollbar {
        width: 0.5rem; /* 스크롤바 너비 */
    }

    &::-webkit-scrollbar-track {
        background: #F5F5F5; /* 트랙 색상 */
        border-radius: 0.5rem; /* 트랙 둥글게 */
    }

    &::-webkit-scrollbar-thumb {
        background: #B0BEC5; /* 스크롤바 색상 */
        border-radius: 0.5rem; /* 스크롤바 둥글게 */
        border: 0.125rem solid #F5F5F5; /* 스크롤바와 트랙 간 간격 */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #90A4AE; /* Hover 시 스크롤바 색상 */
    }
    
`
export const StudentItem = styled.div`
    width: 100%;
    cursor: pointer;
    padding: 0.625rem;
    &:hover {
        background: #F2F3F6;
    }
`

export const DropdownFL = styled.div`
    display: flex;
    gap: 0.625rem;
`

export const ModalLeft = styled.div`
    width: 12.5rem;
    height: 9.875rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`

export const ModalRight = styled.div`
    width: 25rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`

export const ModalMain = styled.div`
    display: flex;
    margin-top: 3.125rem;
    gap: 0.625rem;
`

export const StudentBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
    margin-left: -12.5rem;
    overflow-y: auto;
    max-height: 16.875rem;
`
export const Student = styled.div`
    border: 0.125rem solid #2E6FF2;
    color: #2E6FF2;
    background: white;
    padding: 0.4375rem 0.75rem;
    border-radius: 1.875rem;
    font-weight: 550;
    cursor: pointer;
    height: max-content;
`

export const Class = styled.div`
    display: flex;
    gap: 0.625rem;
    flex-direction: column;

    p{
        font-size: 1.5625rem;
    }
`

export const ClassMain = styled.div`
    display: flex;
    gap: 0.625rem;
    flex-wrap: wrap;
`

export const OptionButton = styled.img`
    width: 0.9375rem;
    cursor: pointer;
    
`

export const Options = styled.div`
    position: absolute;
    z-index: 100;
    display: flex;
    flex-direction: column;
    border: 0.0625rem solid #cccccc;
    border-radius: 0.5rem;
    overflow: hidden;
    background-color: #fff;
    margin-top: 6.5625rem;
    margin-left: 62.375rem;
    
    button {
        border: 0.0625rem;
        padding: 0.625rem 0.0625rem;
        width: 6.25rem;
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
    margin-left: 21.875rem;
    gap: 1.25rem;
`

export const Black = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
`