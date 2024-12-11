import { forwardRef } from 'react';

import { Close, Flex, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface ModalProps {
  title?: string;
  width?: string | number;
  margin?: string;
  closeIcon?: boolean;
  isOpen: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({
  width = '337',
  closeIcon = true,
  ...props
}, ref) => {
  const handleClickInnerModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!props.isOpen) return null;

  return (
    <Backdrop
      onClick={props.toggleModal}
      className={props.isOpen ? 'open' : ''}
    >
      <ModalBox ref={ref} onClick={handleClickInnerModal} width={width} margin={props.margin} direction="column" justify='flex-start'>
        <Flex justify="flex-end" padding='0 0 17px 0'>
          {props.title && (
            <Text
              typo="Body3"
              margin="0 0 0 26px"
              colorCode={theme.palette.Gray400}
            >
              {props.title}
            </Text>
          )}
          {closeIcon && (
            <Close
              isOpen={props.isOpen}
              toggleModal={props.toggleModal}
              margin="0 26px auto auto"
              width={17}
              height={17}
              currentColor={theme.palette.Gray400}
            />
          )}
        </Flex>
        <ModalContent>{props.children}</ModalContent>
      </ModalBox>
    </Backdrop>
  );
});

Modal.displayName = 'Modal';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(49, 48, 54, 0.5);
  z-index: 10000;
`;

const ModalBox = styled(Flex)<{margin?: string}>`
  height: fit-content;
  padding: 18.5px 0;
  position: relative;
  background-color: ${theme.palette.White};
  box-sizing: border-box;
  border-radius: 8px;
  max-height: 80vh;
  overflow-y: auto;

  @media (max-width: 480px) {
    width: ${({ margin }) => (margin ? `calc(100vw - ${margin})` : '337px')};
  }
`;

const ModalContent = styled(Flex)`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
