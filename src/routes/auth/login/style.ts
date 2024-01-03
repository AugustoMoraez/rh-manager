import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:calc(100vh - 300px) ;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SubContainer = styled.div`
    width: 100%;
    max-width: 600px;
    height: 600px;
    padding: 20px;
    background-color: rgba(200,200,200,0.2);
    border-radius: 25px;
    
`;

export const FormTitle = styled.h2`
    margin:20px 10px ;
    color: #333;
`;

export const Form = styled.div`
    display:flex;
    flex-direction: column;   
    padding-bottom: 20px;
    border-bottom:2px solid #fff;
    .input{
        cursor: default;
        padding:10px 20px;
        border-radius: 10px;
        border:1px solid transparent;
        margin-bottom: 10px;
        outline: none;
        color:#333;
        &:focus{
            border: 1px solid royalblue;
        }
    }
    .submit{
        margin: 20px 20px 5px 20px;
        padding:15px 25px;
        border-radius: 50px;
        background-color: royalblue;
        color:#fff;
        border:none;
        border:1px solid transparent;
        cursor: pointer;

        &:hover{
            opacity: 0.9;
        }
    }
    span{
        color:#333;
        font-weight: 600;
        text-align: center;
        margin-top: 10px;
        cursor: pointer;
        &:hover{
            opacity: 0.5;
        }

    }
`;

export const AlternativeLogins = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
    span{
        color:#333;
        margin: 20px auto;
    }
`;

 