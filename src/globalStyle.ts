import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color:#eee;
        font-family: 'Open Sans', sans-serif;
    }
    body{
        background-color: #ffffff;
    }
    ul,li{
        list-style: none;
        display: flex;
    }


`;