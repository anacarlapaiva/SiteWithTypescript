import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { GiDiploma } from 'react-icons/gi';
import { Link } from 'react-router-dom'

interface Props {
  open: boolean;
}

export const Nav = styled.nav`
  background: #101522;
  height:80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index:999;

`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content:space-between;
height: 80px;
width: 1300px;
${Container}
`;

export const NavLogo = styled(Link)`
color: #fff;
justify-content: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`;

export const NavIcon = styled(GiDiploma)`
margin-right: .5rem;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px){
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
}
`;

export const NavMenu = styled.ul<Props>`
display: flex;
align-items: center;
list-style: none;
text-align: center;
width: 70%;
justify-content: space-between;

@media screen and (max-width: 960px) {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 80px;
  left: ${({ open }) => (open ? 0 : '-100%')};
  opacity: 1;
  transition: all .5s ease;
  background: #101522;
}
`;

export const NavItem = styled.li`
heigth: 80px;
border-bottom: 2px solid transparent;

&:hover{
  border-bottom: 2px solid #4b59f7;
}

@media screen and (max-width: 960px){
  width: 100%;

  &:hover{border:none;}
}
`;

export const NavLinks = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
heigth: 100%;

@media screen and (max-width: 960px){
  align-items: center;
  padding: 2rem;
  width: 100%;
  display: table;

  &:hover{color #4b59f7; transition: all 0.3 ease}
}
`;

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px){
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
}
`;

export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;
`;