"use server";

import {z} from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

//⭐⭐validator를 통해 핸드폰 번호가 맞는지 확인, trim으로 공백이 있어도 무시하기
//⭐⭐validator를 좀더 정교하게 사용하기, 한국 핸드폰만 확인하도록 
//⭐⭐에러메세지도 출력하게
const phoneSchema = z.string().trim().refine( (phone) => validator.isMobilePhone(phone, "ko-KR"),
"Wrong phone format"
);

//⭐⭐input에 값을 넣었을 때는 무조건 string이 됨. 번호를 입력하더라도.e 
//⭐⭐그래서 coerce를 통해 string을 number로 변환시켜주기
//⭐⭐6자로 된 토큰 주니까 최소 100000 최대 999999로 주는 거
const tokenSchema = z.coerce.number().min(100000).max(999999);

interface ActionState {
    token: boolean,
}
export async function smsLogin(prevState: any, formData: FormData) {
  const phone = formData.get("phone");
  const token = formData.get("token");
  if(!prevState.token){
    //⭐⭐token이 false라면, 그러니까 아직 verify 누르기 전이라면 
    const result = phoneSchema.safeParse(phone);
    if(!result.success){ //⭐⭐잘못된 전화번호를 입력하면 validation이 실패해서 다음단계로 넘어가지 못함.
        //⭐⭐page에 있는 state와 함께 상호작용해서, false이면 token input 그러니까 인증번호 입력하는 그 input 창이 계속 안 보이게 됨
        return {
            token: false,
            error: result.error.flatten(),
          };
        } else {
          return {
            token: true,
          };
        }
      } else { //⭐⭐올바른 전화번호 입력했을 경우
        const result = tokenSchema.safeParse(token);
        if (!result.success) { //⭐⭐ 근데 인증이 틀렸으면
          return {
            token: true,
            error: result.error.flatten(),
          };
        } else { //⭐⭐인증이 잘 됐으면 홈으로 보내주기
          redirect("/");
        }
      }
    }