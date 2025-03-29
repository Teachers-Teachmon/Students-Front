import styled from "styled-components";
import Header from "../../components/header/index.jsx";

export default function Layout({children}) {
    return (
        <ManageContainer>
            <Header />
            <Wrap>
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
    padding: 40px 6%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 400px) {
        width: 100%;
    }
`