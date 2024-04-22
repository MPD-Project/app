import axios from "axios";
import { error } from "console";
import { promises } from "dns";



const BASE_URL = "login/action";


interface ILoginUser {
    loginEmail: string,
    loginPassword: string,

};

interface IJoinUser {
  joinEmail: string,
};




// 로그인
export const PostLogin = async ({ loginEmail, loginPassword}: ILoginUser)  => {
      //응답 성공 
      const res = await axios.post( BASE_URL, {
          //보내고자 하는 데이터 
          loginEmail,
          loginPassword,
          //성공적인 응답 처리
      },
      {
        headers: 
          {
          'Content-Type': 'application/x-www-form-urlencoded'
          }
      }).then(response => {
        console.log("로그인 처리 성공" + response);
      }).catch(error => {
        console.error("로그인 처리 에러 :" + error);
      }); 
      return res; 
  };

  export const PostJoin = async ({ joinEmail } : IJoinUser) => {
    const res = await axios.post(BASE_URL, {
      joinEmail,
    },
    {
      headers: 
        {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(response => {
      console.log("회원 가입 처리 성공" + response);
    }).catch(error => {
      console.error("회원가입 처리 에러" + error);
    }); 
    return res; 
  }