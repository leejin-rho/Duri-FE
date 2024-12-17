import { useParams } from 'react-router-dom';

import { DuriNavbar, GroomerPortfolio, MobileLayout } from '@duri-fe/ui';
const Portfolio = () => {
  const { designerId } = useParams<{ designerId: string }>();
  const groomerId = designerId ? Number(designerId) : 0;

  return (
    <MobileLayout>
      <GroomerPortfolio groomerId={groomerId} />
      <DuriNavbar />
    </MobileLayout>
  );
};

export default Portfolio;
