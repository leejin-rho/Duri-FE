import { Card, PetInfo } from '@duri-fe/ui';

const MyPage = () => {
  const character = ['character3', 'character1', 'character6'];
  const diseases = ['disease1', 'disease2'];
  return (
    <>
      <Card borderRadius={16} padding='12px 30px 16px 12px'>
        <PetInfo
          name="멍뭉이"
          age={4}
          breed="시츄"
          gender="M"
          weight={3.7}
          neutering={true}
        />
      </Card>
      <Card borderRadius={16} padding='12px 30px 16px 12px'>
      <PetInfo
        name="멍뭉이"
        age={4}
        breed="시츄"
        gender="M"
        weight={3.7}
        neutering={false}
        character={character}
      /></Card>
      <Card borderRadius={16} padding='12px 30px 16px 12px'>

      <PetInfo
        name="멍뭉이"
        age={4}
        breed="시츄"
        gender="M"
        weight={3.7}
        neutering={false}
        character={character}
        diseases={diseases}
      /></Card>
    </>
  );
};

export default MyPage;
