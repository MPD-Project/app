import React from "react";
import  styled  from "styled-components";

const Logo = styled.img`
    position: absolute;
    top:100px;
    width: 250px;
    height: 25px;
`;


const JoinBox = styled.div`
    width: 430px;
    height: 630px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    border: 1px solid black;
`

const JoinTap = styled.div`
    display: flex;
    position: absolute;
    top: 30px;

    h2{
        font-weight: 400;
        color: #9E9E9E;
        font-size: 18px;

    }

`;

const JoinNext = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        width: 293px;
        height: 6px;
        background-color: #D9D9D9;
    }
`;


function Join(){
    return (
        <JoinBox>
            <JoinTap>
                <h2>회원가입</h2>
            </JoinTap>
            <JoinNext>
                
            </JoinNext>
            <Logo src="/img/logo_basic.png" alt="basic logo"/>
        </JoinBox>
    )
};

export default Join;