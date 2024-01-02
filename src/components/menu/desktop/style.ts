import styled from "styled-components";



export const Menu = styled.ul`
    width: 100%;
    max-width: 300px;
    justify-content: space-between;
    @media (max-width : 500px) {
        display: none;
    }
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

