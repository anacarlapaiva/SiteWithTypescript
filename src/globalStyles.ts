import styled, { createGlobalStyle } from 'styled-components'

interface Props {
    primary?: boolean;
    big?: boolean;
    fontBig?: boolean;
}

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    
        ::-webkit-scrollbar {
        width: 7px;
        height: 7px;
        }       
        ::-webkit-scrollbar-thumb {
        background: #5b609f;
        border: 0px none #ffffff;
        border-radius: 50px;
        }
        ::-webkit-scrollbar-thumb:hover {
        background: #525252;
        }
        ::-webkit-scrollbar-thumb:active {
        background: #000000;
        }
        ::-webkit-scrollbar-track {
        background: #666666;
        border: 0px none #ffffff;
        border-radius: 50px;
        }
        ::-webkit-scrollbar-track:hover {
        background: #666666;
        }
        ::-webkit-scrollbar-track:active {
        background: #333333;
        }
        ::-webkit-scrollbar-corner {
        background: transparent;
        }

     }
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right:50px;
padding-left:50px;

@media screen and (max-width: 991px){
padding-right: 30px;
padding-left: 30px;
}
`;

export const Button = styled.button<Props>`
border-radius: 4px;
background: ${({ primary }) => (primary ? '#4b5987' : '#0467fb')};
white-space: nowrap;
padding: ${({ big }) => (big ? '12px 64px' : '10´x 20px')};
color: #fff;
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border:none;
cursor: pointer;

&:hover {
    transition: translate 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#0467fb' : '#4b5987')};
}

@media screen and (max-width: 960px){
    width: 100%;
}
`;



export default GlobalStyle;


