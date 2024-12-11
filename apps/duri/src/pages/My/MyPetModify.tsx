import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { breedMapping } from '@duri/assets/data';
import { InputImageFile } from '@duri/components/my/InputImageFile';
import { PetModifyForm } from '@duri/components/my/modify/PetModifyForm';
import {
  Button,
  DuriNavbar,
  Flex,
  Header,
  HeightFitFlex,
  MobileLayout,
  theme,
} from '@duri-fe/ui';

export interface FormData {
  imageURL: string;
  name: string;
  weight: number;
  breed: string;
  gender: string;
  neutering: boolean;
  age: number;
  character: string[];
  diseases: string[];
}

const MyPetModifyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = (data: FormData) => {
    setValue('breed', breedMapping[data.breed]);

    //API 연결
    console.log(data);

    navigate('/my/pet', { state: location.state });
  };
  const onChange = (file: string) => {
    setValue('imageURL',file)
  }

  const { control, handleSubmit, setValue, getValues } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      imageURL: 'https://s3-alpha-sig.figma.com/img/2b3d/3445/169b817c088e24ca9f6999b9f7c18e5a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UNX-HCHQvf6OGFxdmOjpEf~gbzgcXfr7L~ZILgiSxtXRAt2cDJemS7sJOHFn177dH4-rXFgC0mu0iSo4mT02cqw0ybPZ7D-2GK5ch4XLi20GbfJjcy3yPJSXbtOonwpHQFjJDgbjRDu0VK~iz3DJSvLzAjmn5GvFaikpRDWTtJX51eL-YTGIBt7Q1vYxt66nU2dyREh1wb7u5chrtXImto2iEdFviMwJgZKP~f3K1457j~KdS~gM5gtOtm7ozWPTjdraKskNXGJhWWe9wfE74HFPFG~Tj~lY89I2fPd5TNnQI0CCghKbFOLIUyGtrJ0KceIW-gsIic-A3GWQ9IFCyg__',
      name: '신참이',
      weight: 3.1,
      breed: '시츄',
      gender: 'F',
      neutering: true,
      age: 3,
      character: ['character1'],
      diseases: ['disease5'],
    },
  });

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Header
        title="마이펫 정보 수정"
        titleAlign="start"
        backIcon={true}
        onClickBack={() => navigate(-1)}
      />
      <Flex direction="column" padding="0 20px" margin="0 0 30px 0">
        <InputImageFile imageURL={getValues('imageURL')} onChange={onChange} />
        <PetModifyForm
          control={control}
          getValues={getValues}
          setValue={setValue}
        />
      </Flex>
      <HeightFitFlex margin="0 0 93px 0">
        <Button
          borderRadius="0px"
          bg={theme.palette.Black}
          fontColor={theme.palette.White}
          onClick={handleSubmit(onSubmit)}
        >
          수정 완료
        </Button>
      </HeightFitFlex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default MyPetModifyPage;
