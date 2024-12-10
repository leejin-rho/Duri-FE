import { useNavigate } from "react-router-dom";

import { Header, MobileLayout } from "@duri-fe/ui";

const MyHistoryPage = () => {
    const navigate = useNavigate()
    const handleNavigate = () => navigate(-1)
    return (
        <MobileLayout>
            <Header backIcon={true} title="이용기록" titleAlign="start" onClickBack={handleNavigate} />
        </MobileLayout>
    )
}

export default MyHistoryPage;