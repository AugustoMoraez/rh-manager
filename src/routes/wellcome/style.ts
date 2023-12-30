import styled from "styled-components";




export const Container = styled.div`
    width: 100%;
    color:#333;
    margin:auto ;
    display: flex;
    
`;
export const Banner = styled.div`
    width: 100%;
    max-width: 961px; 
    max-height: 640px;
    position: relative;

    img{
        border-bottom-right-radius: 500px;
        width: 100%;
        max-width: 961px; 
        position: absolute;        
    }
    p{
        position: absolute;
        width: 100%;
        max-width:480px ;
        top:100px;
        right:50px;
        background-color: rgba(0,0,0,0.8);
        border-radius: 40px;
        padding: 20px;
        text-align: center;
        cursor: default;
        &:hover{
            transform: scale(1.03);
            transition: 1s;
            cursor: pointer;
        }
        
    }
`;
