"use client"; //hook 써주니까 필요~

import { useFormStatus } from "react-dom";

interface FormButtonProps{
    text: string;
}

export default function FormButton({text}: FormButtonProps){
    //⭐⭐⭐pending 상태인지를 알려줌, function이 끝난 여부를 알려준다.
    //⭐하지만 action을 실행하는 form과 같은 곳에서는 사용할 수 없다!
    //⭐form의 자식!! 에서만 사용할 수 있다.
    //⭐즉, form의 상태에 따라 변경하고자 하는 component 내부에서 사용해야 한다.
    //⭐우리의 경우에는 그게 버튼임~~
    //⭐pending 덕분에 loading이 이제 필요없으니까 다 지워주고 대신 pending을 써주기
    const {pending} = useFormStatus();
    return(
    <button 
    //⭐만약 로딩 상태라면 버튼이 다른 색으로 보이고 선택할 수 없는 상태가 되며 로딩 중이라는 문구가 떠야 하므로
    //⭐disabled라는 상태와, 3항 연산자 사용해주기 
        disabled={pending} 
        className="primary-btn h-10 
        disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed">
            { pending? "로딩 중" : text}</button>
    );
}