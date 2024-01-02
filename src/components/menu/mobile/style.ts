import styled from "styled-components";


export const Container = styled.div`
    display: none;
    position: relative;
    cursor: pointer;
    
    svg{
        height: 45px;
        width: 45px;
        padding: 10px;
        background-color: royalblue;
        border-radius: 50%;
        
        &:hover,&:focus{
        transform: scale(1.1);
        transform: rotate(360deg);
        transition: 500ms;
        }
    }

    @media (max-width: 500px) {
        display: flex;
    }

`;


type Menu = {
    toggle:boolean
}

export const Menu = styled.ul<Menu>`
    opacity: ${(menu ) => menu.toggle === true ? "1" : "0" };
    transition: 500ms;
    margin-top: 50px;
    margin-left:-40px ;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: royalblue;
    z-index: 99;

    

`;

export const MenuOption = styled.li`
    a{
        text-decoration: none;
        padding: 4px 8px;
    }

`;