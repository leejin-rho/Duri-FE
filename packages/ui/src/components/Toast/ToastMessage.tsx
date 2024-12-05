import { ToastContainer, Zoom } from 'react-toastify';

import { theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

const Toast = () => {
  return (
    <ToastMessage
      hideProgressBar={true}
      autoClose={1500}
      closeButton={false}
      transition={Zoom}
      pauseOnFocusLoss={false}
      limit={1}
    />
  );
};

export default Toast;

const ToastMessage = styled(ToastContainer)`
  .Toastify__toast {
    display: flex;
    background-color: ${theme.palette.Black};
    color: ${theme.palette.White};
    border-radius: 12px;
    padding: 12px 6px;
    align-items: center;
    box-sizing: border-box;
    height: fit-content;
    min-height: 44px;

    font-size: 13px;
    font-family: 'Pretendard';
    line-height: 100%;
  }

  .Toastify__toast-body {
    margin: 0 12px;
    padding: 0;
  }
  .Toastify__toast--success {
    margin: 0;
    padding: 0;
  }
`;
