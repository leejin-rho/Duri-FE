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

    const { lat, lon } = await getGeocoding(address);

    setAddress(fullAddress);
    setZipCode(zonecode);
    setCoordinates({ lat, lon });

    closeModal();
  };

  return (
    <Flex>
      <DaumPostcodeEmbed onComplete={handleComplete} />
    </Flex>
  );
};

export default AddressSearchModal;
