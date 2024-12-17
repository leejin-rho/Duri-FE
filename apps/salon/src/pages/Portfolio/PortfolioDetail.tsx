import { useParams } from 'react-router-dom';

import { GroomerPortfolioDetail, MobileLayout, SalonNavbar } from '@duri-fe/ui';

const PortfolioDetailPage = () => {
  const { portfolioId } = useParams<{ portfolioId: string }>();
  const feedbackId = portfolioId ? Number(portfolioId) : 0;

  return (
    <MobileLayout>
      <GroomerPortfolioDetail feedbackId={feedbackId} />
      <SalonNavbar />
    </MobileLayout>
  );
};

export default PortfolioDetailPage;
