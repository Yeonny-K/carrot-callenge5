"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { useFormState } from "react-dom";
import { smsLogin } from "./actions";


//⭐⭐이거 의미가 뭐냐면, 처음에 실행하면 token이 false인 상태이니까
//⭐⭐인증 누르기 전까지는 그 input을 가려놓을 수 있게 됨
const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLogin() {
    const [state, dispatch] = useFormState(smsLogin, initialState);
    return (
      <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex flex-col gap-2 *:font-medium">
          <h1 className="text-2xl">SMS Log in</h1>
          <h2 className="text-xl">Verify your phone number.</h2>
        </div>
        <form action={dispatch} className="flex flex-col gap-3">
        {state.token ? (
          <FormInput
            name="token"
            type="number"
            placeholder="Verification code"
            required
            min={100000}
            max={999999}
          />
        ) : (
          <FormInput
            name="phone"
            type="text"
            placeholder="Phone number"
            required
            errors={state.error?.formErrors}
          />
        )}
          <FormButton text={state.token ? "Verify Token" : "Send Verification SMS"} />
        </form>
      </div>
    );
  }