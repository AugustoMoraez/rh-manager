import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px;
    width: 100%;
    height: 130px;

`;

export const Logo = styled.div`
    width: 60px;
    height: 60px;
    background-color: royalblue;
    border-radius: 50%;
    font-weight: 900;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        transition: 500ms;
    }
`;


export const Menu = styled.ul`
    width: 100%;
    max-width: 300px;
    justify-content: space-between;
    
    `;

type menuProp = {
    active:boolean
}

export const MenuLink = styled.li<menuProp>`
    background-color: ${(menuProp) => menuProp.active === true ? "royalblue" : "" };
    padding: 7px 10px;
    border-radius: 20px;
    font-weight: ${(menuProp) => menuProp.active === true ? "900" : "" };
    
    a{
        color: ${(menuProp) => menuProp.active === true ? "#fff" : "#333" };
        text-decoration: none;
    }




`;

