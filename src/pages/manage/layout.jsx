import styled from "styled-components";
import Header from "../../components/header/index.jsx";
import {mq} from "../../styles/media.js";

export default function Layout({children, none}) {
    return (
        <ManageContainer>
            <Header />
            <Wrap $none={none}>
                {children}
            </Wrap>
        </ManageContainer>
    )
}

export const ManageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
`
export const Wrap = styled.div`
    width : 87%;
    height: 100%;
    ${(props)=>props.$none ? "padding: 0;": "padding: 40px 6%;"}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${mq.mobile}{
      width: 100%;
    }
`