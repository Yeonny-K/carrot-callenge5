import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div 
      //⭐하위 모든 폰트들에 medium 적용
      className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl ">당근</h1>
        <h2 className="text-2xl">당근 마겟에 어서오세요!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link
        //⭐마우스 올렸을 때 색상이 살짝 밝아지게 hover, transition-colors
          href="/create-account"
          //⭐global css 써먹는 방법 이렇게! 그리고 py-2.5, text-lg로 개별 커스텀이 필요하면 추가해주기
          className="primary-btn py-2.5 text-lg"
        >
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link 
          //⭐처음엔 이 링크에 hover를 global로 했다가, 그렇게 하면 버튼 안의 링크에도 밑줄이 그어져버려서
          //⭐앞으로 버튼을 많이 만들 예정이라 global에서 빼고 필요한 link에 직접 넣기로 함.
          href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}