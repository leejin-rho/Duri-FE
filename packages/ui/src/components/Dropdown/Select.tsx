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
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
border-radius: 8px;
max-height: 150px;
overflow-y: auto;
z-index: 100;
padding: 0;

`;