import styled from "styled-components";

export const DropdownContainer = styled.div`
    width: max-content;
    background: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5px 5px;
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


export const DropdownMenu = styled.ul`
  position: absolute;
    top: 35px;
    left: 0;
    list-style: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    z-index: 11;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
    width: 150px;
    background: white;
    z-index: 10;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    padding: 8px 12px;
    width: 150px;
    font-size: 14px;
    outline: none;
`