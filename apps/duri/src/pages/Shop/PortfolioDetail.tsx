import { useParams } from 'react-router-dom';

import { DuriNavbar, GroomerPortfolioDetail, MobileLayout } from '@duri-fe/ui';

const PortfolioDetail = () => {
  const { portfolioId } = useParams<{ portfolioId: string }>();
  const feedbackId = portfolioId ? Number(portfolioId) : 0;

  return (
    <MobileLayout>
      <GroomerPortfolioDetail feedbackId={feedbackId} />
      <DuriNavbar />
    </MobileLayout>
  );
};

export default PortfolioDetail;
