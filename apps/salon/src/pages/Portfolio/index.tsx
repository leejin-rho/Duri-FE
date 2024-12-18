import { GroomerPortfolio, MobileLayout, SalonNavbar } from "@duri-fe/ui"
import useGroomerStore from "@salon/stores/groomerStore";

const PortfolioPage = () => {
    const groomerId = useGroomerStore((state)=>state.groomerId);

    return(
        <MobileLayout>
            <GroomerPortfolio groomerId={groomerId} />
            <SalonNavbar />
        </MobileLayout>
    )
}
export default PortfolioPage;