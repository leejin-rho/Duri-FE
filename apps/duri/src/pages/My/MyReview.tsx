import { useNavigate } from "react-router-dom";

import { Header, MobileLayout } from "@duri-fe/ui";

const MyReviewPage = () => {
    const navigate = useNavigate()
    const handleNavigate = () => navigate(-1)
    return (
        <MobileLayout>
            <Header backIcon={true} title="내가 쓴 후기" titleAlign="start" onClickBack={handleNavigate} />
        </MobileLayout>
    )
}

export default MyReviewPage;