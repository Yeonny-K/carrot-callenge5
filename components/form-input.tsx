import { InputHTMLAttributes } from "react";

//⭐타입스크립트라서 문법 정의 필요
interface FormInputProps{
    errors?: string[];
    name: string;
}

//⭐⭐⭐ InputHTMLAttributes<HTMLInputElement> 로 모든 인자를 rest에 받도록 해놓았기 때문에 interface 정의도, 밑에서도 다 생략 가능함.
export default function FormInput({
    errors = [], name, ...rest
}: FormInputProps & InputHTMLAttributes<HTMLInputElement>){
    return (
        <div className="flex flex-col gap-2">
                    {/* ⭐focus가 됐을 때 테두리를 orange로 만들어주기*/}
                    <input 
                    // ⭐⭐⭐ input을 백엔드단에서 받아오는 것으로 사용할 거라서, name 지어줘야 함
                    name={name}
                    className="bg-transparent rounded-md 
                    w-full h-10 focus:outline-none ring-2
                    focus:ring-4 transition ring-neutral-200 
                    focus:ring-orange-500 border-none
                    placeholder:text-neutral-400"  
                    //⭐⭐⭐그리고 그 rest는 이렇게 전달해주기  
                    {...rest}
                     />
                    {errors.map((error,index)=> (
                        <span key={index} className="text-red-500 font-medium">{error}</span>
                    ))}
                </div>
    )
}