import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px;
    width: 100%;
    height: 130px;
    @media (max-width:500px) {
        padding: 20px;
    }
`;

export const Logo = styled.div`
    width: 50px;
    height: 50px;
    background-color: royalblue;
   
    border-radius: 50%;
    font-weight: 900;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    cursor: pointer;
    a{
        text-decoration: none;
    }
    &:hover{
        transform: scale(1.1);
        transition: 500ms;
    }
`;

