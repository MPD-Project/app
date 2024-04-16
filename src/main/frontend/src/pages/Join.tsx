import React ,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import  styled  from "styled-components";
import { faX, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import EmailCode from "../components/Join/EmailCode";
import Password from "../components/Join/Password";
import Petprofile from "../components/Join/Petprofile";
import Done from "../components/Join/Done";
import Email from "../components/Join/Email";



const OverLay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left:0%;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9999;
`;

const Logo = styled.img`
    position: absolute;
    top:90px;
    width: 220px;
    height: 20px;
`;


const JoinBox = styled(motion.div)`
    width: 430px;
    height: 630px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    left: 35%;
    top: 5%;
    position: absolute;
`;

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



function Join(props: any){
    const [step , setStep] = useState(1);
    const modalBack = useNavigate();
    const hadlePrev = () => {
        modalBack(-1);
    };
    const { onClose } = props;
    return (
    <OverLay>
        <JoinBox>
            <JoinTap>
            <FontAwesomeIcon 
                            onClick={hadlePrev}
                             icon={faChevronLeft} 
                             color="#D9D9D9" 
                             size="xl"
                             style={{position:"absolute", top:-5, right: 200,cursor: "pointer"  }} 
                             />
            <FontAwesomeIcon onClick={() =>{onClose(false)}}
                             icon={faX} 
                             color="#D9D9D9" 
                             size="xl" 
                             style={{position:"absolute", top:-5, left:200,cursor: "pointer"  }}/>
                <h2>회원가입</h2>
            </JoinTap>
            <Logo src="/img/logo_basic.png" alt="basic logo"/>
                {step === 1 && <Email setStep={setStep} />}
                {step === 2 && <EmailCode setStep={setStep} />}
                {step === 3 && <Password setStep={setStep} />}
                {step === 4 && <Petprofile setStep={setStep} />}
                {step === 5 && <Done setStep={setStep} />}
        </JoinBox>
    </OverLay>
    )
};

export default Join;