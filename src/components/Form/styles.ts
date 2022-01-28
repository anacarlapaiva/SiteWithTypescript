import styled from 'styled-components';

export const Wrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 50px 0;
margin: 0 auto;

@media screen and (max-width: 1024px){
    display: flex;
    flex-direction: column;
  }
`;

export const FormComponent = styled.form`
  height: 470px;
  width: 35%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: -webkit-border-top-left-radius: 8px;
  -webkit-border-bottom-left-radius: 8px;
  -moz-border-radius-topleft: 8px;
  -moz-border-radius-bottomleft: 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 130px;
  flex-direction: column;

  h1{
    font-size:1.7em;
    font-weight: 300;
    margin-bottom: 28px;
  }

  @media screen and (max-width: 1024px){
   border-radius: 8px;
 
   padding: 20px;
   max-width: 300px;
   width: 100%;
  }
`;

export const FormContainer = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: column;
  label{
    font-size:1.1em;
    color: #333
  }

`;

export const RightSide = styled.div`
  height: 470px;
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px){
   display:none;
  }
 
`;

export const RightSideImage = styled.img`
max-width: 100%;
height: 470px;
border-radius:-webkit-border-top-right-radius: 8px;
-webkit-border-bottom-right-radius: 8px;
-moz-border-radius-topright: 8px;
-moz-border-radius-bottomright: 8px;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
`;


