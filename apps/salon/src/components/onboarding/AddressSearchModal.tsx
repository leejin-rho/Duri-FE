import DaumPostcodeEmbed from 'react-daum-postcode';

import { Flex } from '@duri-fe/ui';
import { Coordinates, DaumPostcodeResponseType } from '@salon/types';
import { getGeocoding } from '@salon/utils';

interface AddressSearchModalProps {
  setZipCode: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setCoordinates: React.Dispatch<React.SetStateAction<Coordinates>>;
  closeModal: () => void;
}

const AddressSearchModal = ({
  setZipCode,
  setAddress,
  setCoordinates,
  closeModal,
}: AddressSearchModalProps) => {
  const handleComplete = async ({
    address,
    addressType,
    bname,
    buildingName,
    zonecode,
  }: DaumPostcodeResponseType) => {
    let fullAddress = address;
    let extraAddress = '';

    if (addressType === 'R') {
      if (bname !== '') {
        extraAddress += bname;
      }
      if (buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${buildingName}` : buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    await getGeocoding(address)
      .then((res) => {
        setCoordinates({ lat: res.lat, lon: res.lon });
      })
      .catch(() => {
        alert('주소를 검색할 수 없습니다.');
        closeModal();
        return;
      });

    setAddress(fullAddress);
    setZipCode(zonecode);
  };

  return (
    <Flex>
      <DaumPostcodeEmbed onComplete={handleComplete} />
    </Flex>
  );
};

export default AddressSearchModal;
