import React from "react";
import  styled  from "styled-components";

const JoinNext = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 140px;
    div {
        margin-left: 8px;
        width: 55px;
        height: 6px;
        background-color: #D9D9D9;
    }

 
    & div:first-child {
        background-color: ${(props)=> props.theme.pink.lighter};
    }

    & div:nth-child(2) {
        background-color: ${(props)=> props.theme.pink.lighter};
    }

    & div:nth-child(3) {
        background-color: ${(props)=> props.theme.pink.lighter};
    }

    & div:nth-child(4) {
        background-color: ${(props)=> props.theme.pink.lighter};
    }
    
`;

  

const JoinInfo = styled.div`
    position: absolute;
    width: 264px;
    height: 44px;
    display: flex;
    flex-direction: column;
    top: 175px;
    right: 100px;
    span {
        color: ${(props)=> props.theme.gray.darker};        
        font-weight: 500;
        font-size: 18px;
        line-height: 120%;
    }
`;


const JoinForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:230px;
    input {
        margin: 10px;
        padding-left: 20px;
        background-color: #F0F0F0;
        color: ${(props)=> props.theme.gray.darker};
        border : none;
        border-radius: 5px;
        width: 330px;
        height: 50px;
        &:focus {
            outline: none;
        }
    }

    & input:last-child {
        cursor: pointer;
    }

    select {
        margin: 10px;
        padding-left: 20px;
        background-color: #F0F0F0;
        color: ${(props)=> props.theme.gray.darker};
        border : none;
        border-radius: 5px;
        width: 330px;
        height: 50px;
    }

    span {
        margin-right: 210px;
        color: ${(props)=> props.theme.pink.lighter};
        font-weight: 550;
        font-size: 15px;
        line-height: 120%;
    }
`;

const NextBtn= styled.button`
        position: absolute;
        top: 530px;
        border : none;
        border-radius: 5px;
        width: 330px;
        height: 50px;
        background-color:${(props)=> props.theme.pink.lighter};
        color: #ffffff;
        font-weight:bold;
        cursor: pointer;
`;


const ERROR = styled.span `
    color: ${(props)=> props.theme.pink.veryPink};
`;



type Props = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
  };


function Petprofile ({ setStep }: Props) {
    return(
        <>
        <JoinNext>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </JoinNext>
        <JoinInfo>
            <span>반려동물 정보를 입력해주세요.</span>
        </JoinInfo>
        <JoinForm>
            <span>반려동물 이름</span>
            <input type="text" placeholder="반려동물 이름"/>
            <span>반려동물 종류</span>
            <select>
                <option value="dog">강아지</option>
                <option value="cat">고양이</option>
                <option value="bird">새</option>
                <option value="rodent">햄스터(설치류)</option>
                <option value="fish">물고기</option>
                <option value="etc">기타</option>
            </select>
            <span>반려동물 생일</span>
            <input type="date" />
        </JoinForm>
        <NextBtn onClick={()=> setStep(5)}>다음</NextBtn>
    </>
    );
}

export default Petprofile;