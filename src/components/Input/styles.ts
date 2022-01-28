import styled from 'styled-components';

// export const InputComponent = styled.input`
//   padding: 10px 20px;
//   border-radius: 2px;
//   margin-right: 10px;
//   outline: none;
//   border: 1px solid #ccc;
//   font-size: 16px;
//   border: 1px solid #fff;
//   margin-bottom: 15px;
//   &::placeholder {
//     color: #242424;
//   }
 
// `;

export const Container = styled.div`
`;


export const InputComponent = styled.input<{ error?: boolean }>`
  height: 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 15rem;
  margin-bottom:  ${({ error }) => (error ? "0" : "15px")};
  border-color: ${({ error }) => (error ? "#f00" : "#ddd")};
`;

export const HelperText = styled.text<{ error?: boolean }>`
  color: ${({ error }) => (error ? "#f00" : "#aaa")};
  margin: 0.2rem;

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
