import styled from '@emotion/styled';

export const Select = styled.ul<{
    width?: number | string;
}>`
position: absolute;
width: ${({ width }) => (width ? `${Number(width)+40}px` : '100%')};
top: 100%;
left: 0;
background-color: white;
border: none;
box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.10);
border-radius: 8px;
max-height: 150px;
overflow-y: auto;
z-index: 100;
margin-top: 4px;

`;