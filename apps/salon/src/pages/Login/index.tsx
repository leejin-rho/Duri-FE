import { MobileLayout, SpeechBallon, theme } from "@duri-fe/ui";

const LoginPage = () => {
  return (
    <MobileLayout>
      <h1>로그인 페이지</h1>
      <SpeechBallon
        label="3초만에 시작하기 🚀"
        textColor={theme.palette.Gray400}
      />
    </MobileLayout>
  )
}

export default LoginPage;