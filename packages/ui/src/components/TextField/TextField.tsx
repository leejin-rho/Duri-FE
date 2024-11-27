import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

import styled from '@emotion/styled';

import { theme } from '../../styles';
import { Flex } from '../FlexBox';
import { HeightFitFlex } from '../FlexBox/Flex';

interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  helperText?: { type: 'normal' | 'error'; text: string }[];
  width?: number;
  height?: number;
  multiline?: boolean;
  isSubTextField?: boolean;
  fontColor?: string;
  right?: ReactNode;
  isRound?: boolean;
  isError?: boolean;
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
 * @param {ReactNode} isRound: 둥근 인풋 여부
 * @param {ReactNode} isError: 에러일 경우
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
      width = 328,
      height,
      multiline = false,
      isSubTextField = false,
      fontColor = theme.palette.Black,
      right,
      isError = false,
      ...props
    },
    ref,
  ) => {
    return (
      <Container width={isSubTextField ? width + 37 : width}>
        <HeightFitFlex
          direction="row"
          gap={19}
          justify="flex-start"
          align="flex-end"
        >
          {label && <StyledLabel>{label}</StyledLabel>}
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
                spellCheck={false}
                fontColor={fontColor}
                isRight={Boolean(right)}
                isError={isError}
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

const Container = styled(Flex)<{ width: number }>`
  width: ${({ width }) => width}px;

  flex-direction: column;
  align-items: flex-start;
`;
const StyledHelperTextBox = styled.div`
  margin-top: 8px;
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
    /* -webkit-box-shadow: 0 0 0 1000px ${theme.palette.Gray100} inset; */
    -webkit-text-fill-color: ${({ fontColor }) => fontColor};
    //글자색
  }
`;

const StyledInput = styled.input<{
  fontColor: string;
  isRight: boolean;
  value?: string | number | readonly string[] | undefined;
  isError: boolean;
}>`
  width: inherit;
  padding: ${({ isRight }) => (isRight ? '10px 50px 10px 16px' : '10px 16px')};

  box-sizing: border-box;

  background: ${theme.palette.White};
  border-radius: 8px;

  /* border: 1px solid ${theme.palette.Gray300}; */
  border: 1px solid
    ${({ isError }) => (isError ? theme.palette.Alert : theme.palette.Gray300)};

  ${theme.typo.Body3};
  /* color: ${({ fontColor }) => fontColor}; */
  color: ${({ isError, fontColor }) =>
    isError ? theme.palette.Alert : fontColor};

  & + div {
    color: ${({ value }) =>
      value ? theme.palette.Gray500 : theme.palette.Gray300};
  }

  :focus {
    & + div {
      color: ${theme.palette.Gray500};
    }
    border: 1px solid ${theme.palette.Gray500};

    color: ${theme.palette.Black};
  }

  ::placeholder {
    color: ${({ isError }) =>
      isError ? theme.palette.Alert : theme.palette.Gray300};
  }
`;

const StyledTextArea = styled.textarea<{
  height?: number;
  fontColor: string;
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
  margin-bottom: 12px;

  ${theme.typo.Label1};
  color: ${theme.palette.Black};
`;

const StyledHelperText = styled.p<{ isError: boolean }>`
  ${theme.typo.Body3};
  color: ${({ isError }) =>
    isError ? theme.palette.Alert : theme.palette.Gray300};
`;
