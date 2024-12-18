import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import { AlertStar } from '@duri-fe/ui';
import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '../../styles';
import { Flex } from '../FlexBox';
import { HeightFitFlex } from '../FlexBox/Flex';

interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  helperText?: { type: 'normal' | 'error'; text: string }[];
  width?: number;
  widthPer?: string;
  height?: number;
  multiline?: boolean;
  isSubTextField?: boolean;
  fontColor?: string;
  right?: ReactNode;
  isRound?: boolean;
  isError?: boolean;
  isEssential?: boolean;
  isNoBorder?: boolean;
  background?: string;
  shadow?: string;
  placeholderTypo?: SerializedStyles;
}

/**
 * @param {string} label: 텍스트 필드 상위 레이블
 * @param {{type: string; text: string}[]} helperText: 텍스트 필드 하위 안내 메시지 | error(alert color), normal(gray color)
 * @param {number} width: width size
 * @param {number} height: height size
 * @param {boolean} multiline: 여러 줄
 * @param {boolean} isSubTextField: 하위 TextField 여부
 * @param {boolean} fontColor: TextField 내부 폰트 색상
 * @param {ReactNode} right: 우측 아이콘
 * @param {boolean} isRound: 둥근 인풋 여부
 * @param {boolean} isError: 에러일 경우
 * @param {boolean} isEssential: 필수 항목일 경우
 * @param {boolean} isNoBorder: 테두리가 없을 경우
 * @param {string} background: 배경색
 * @param {string} shadow: 그림자
 * @param {string} widthPer: 너비 퍼센티지
 *
 */
export const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(
  (
    {
      label,
      helperText,
      placeholder = '내용을 입력해주세요.',
      placeholderTypo,
      width = 328,
      widthPer,
      height,
      multiline = false,
      isSubTextField = false,
      fontColor = theme.palette.Black,
      right,
      isError = false,
      isRound = false,
      isEssential = false,
      isNoBorder = false,
      background = theme.palette.White,
      shadow = 'none',

      ...props
    },
    ref,
  ) => {
    function maxLengthCheck(event: React.ChangeEvent<HTMLInputElement>) {
      if (
        event.target.maxLength > 0 &&
        event.target.value.length > event.target.maxLength
      ) {
        //object.maxLength : 매게변수 오브젝트의 maxlength 속성 값입니다.
        event.target.value = event.target.value.slice(
          0,
          event.target.maxLength,
        );
      }
    }

    return (
      <Container per={widthPer} width={isSubTextField ? width + 37 : width}>
        <HeightFitFlex
          direction="row"
          gap={4}
          justify="flex-start"
          align="center"
          margin="0 0 8px 0"
        >
          <Flex width="fit-content" gap={1}>
            {label && <StyledLabel>{label}</StyledLabel>}
            {isEssential && (
              <Flex width={8} align="flex-start">
                <AlertStar width={8} isUpper />
              </Flex>
            )}
          </Flex>
          {helperText && (
            <StyledHelperTextBox>
              {helperText.map((helper, idx) => (
                <StyledHelperText key={idx} isError={helper.type === 'error'}>
                  {helper.text}
                </StyledHelperText>
              ))}
            </StyledHelperTextBox>
          )}
        </HeightFitFlex>
        <Flex align="flex-start">
          {/* {isSubTextField && <SubTextFieldIcon />} */}
          {multiline ? (
            <StyledTextArea
              {...props}
              ref={ref as ForwardedRef<HTMLTextAreaElement>}
              placeholder={placeholder}
              placeholderTypo={placeholderTypo}
              spellCheck={false}
              height={height}
              fontColor={fontColor}
            />
          ) : (
            <InputContainer fontColor={fontColor}>
              <StyledInput
                {...props}
                ref={ref as ForwardedRef<HTMLInputElement>}
                placeholder={placeholder}
                placeholderTypo={placeholderTypo}
                spellCheck={false}
                onInput={maxLengthCheck}
                height={height}
                fontColor={fontColor}
                isRight={Boolean(right)}
                isError={isError}
                isRound={isRound}
                isNoBorder={isNoBorder}
                background={background}
                shadow={shadow}
              />
              {right && <StyledIcon className="icon">{right}</StyledIcon>}
            </InputContainer>
          )}
        </Flex>
      </Container>
    );
  },
);

TextField.displayName = 'TextField';

const Container = styled(Flex)<{
  per?: string;
  width: number;
}>`
  width: ${({ width, per }) => per ?? `${width}px`};

  flex-direction: column;
  align-items: flex-start;
`;
const StyledHelperTextBox = styled.div`
  /* margin-top: 8px; */
`;
const InputContainer = styled.div<{
  fontColor: string;
}>`
  position: relative;
  width: 100%;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: ${({ fontColor }) => fontColor};
    //글자색
  }
`;

const StyledInput = styled.input<{
  height?: number;
  fontColor: string;
  isRight: boolean;
  value?: string | number | readonly string[] | undefined;
  isError?: boolean;
  isRound?: boolean;
  isNoBorder?: boolean;
  background?: string;
  shadow?: string;
  placeholderTypo?: SerializedStyles;
}>`
  width: inherit;
  height: ${({ height }) => height ?? 40}px;
  padding: ${({ isRight }) => (isRight ? '10px 50px 10px 16px' : '10px 16px')};

  box-sizing: border-box;

  background: ${({ background }) => background ?? theme.palette.White};
  box-shadow: ${({ shadow }) => shadow ?? 'none'};

  border-radius: ${({ isRound, isNoBorder }) =>
    isNoBorder ? '12px' : isRound ? '99px' : '8px'};

  border: ${({ isNoBorder, isError }) =>
    isError
      ? `1px solid ${theme.palette.Alert}`
      : isNoBorder
        ? `1px solid ${theme.palette.White}`
        : `1px solid ${theme.palette.Gray300}`};

  ${({ isNoBorder, isRound }) =>
    isNoBorder
      ? theme.typo.Label2
      : isRound
        ? theme.typo.Body2
        : theme.typo.Body3};
  color: ${({ isError, fontColor }) =>
    isError ? theme.palette.Alert : fontColor};
  text-align: ${({ isRound }) => (isRound ? 'center' : 'flex-start')};

  & + div {
    color: ${({ value }) =>
      value ? theme.palette.Gray500 : theme.palette.Gray300};
  }

  :focus {
    & + div {
      color: ${theme.palette.Gray500};
    }
    border: ${({ isNoBorder }) =>
      isNoBorder
        ? `1px solid ${theme.palette.White}`
        : `1px solid ${theme.palette.Gray500}`};

    color: ${theme.palette.Black};
  }

  ::placeholder {
    color: ${({ isNoBorder, isError, isRound }) =>
      isNoBorder
        ? theme.palette.Gray500
        : isError
          ? theme.palette.Alert
          : isRound
            ? theme.palette.Black
            : theme.palette.Gray300};

    ${({ placeholderTypo }) => placeholderTypo};
  }
`;

const StyledTextArea = styled.textarea<{
  height?: number;
  fontColor: string;
  placeholderTypo?: SerializedStyles;
}>`
  width: inherit;
  height: ${({ height }) => (height ? height : 240)}px;
  padding: ${({ height }) => (height ? '8px 16px' : '12px 8px 12px 16px')};

  box-sizing: border-box;

  background: ${theme.palette.White};
  border-radius: 8px;
  resize: none;

  border: 1px solid ${theme.palette.Gray100};

  ${theme.typo.Body3};
  color: ${({ fontColor }) => fontColor};

  :focus {
    border: 1px solid ${theme.palette.Gray500};
  }

  ::placeholder {
    color: ${theme.palette.Gray300};
    ${({ placeholderTypo }) => placeholderTypo};
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.palette.Gray300};
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: 8px;
  }
`;

const StyledIcon = styled.div`
  position: absolute;
  height: 24px;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
`;

const StyledLabel = styled.p`
  ${theme.typo.Label1};
  color: ${theme.palette.Black};
`;

const StyledHelperText = styled.p<{ isError: boolean }>`
  ${theme.typo.Label3};
  color: ${({ isError }) =>
    isError ? theme.palette.Alert : theme.palette.Gray300};
`;
