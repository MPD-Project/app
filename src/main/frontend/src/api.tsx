import axios from "axios";
import { promises } from "dns";



const BASE_URL = "http//localhost:3000";


interface ILoginUser {
    email: string,
    password: string,
};


// 회원가입
export const PostLogin = async ({ email, password }: ILoginUser) => {
    const response = await axios.post(BASE_URL, {
      email,
      password,
    });
    return response;
  };