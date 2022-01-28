import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './styles';
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles';


interface INavbarProps{
    showButtonSignUp?: boolean
}
const Navbar: React.FC<INavbarProps> = ({showButtonSignUp = true}) => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    } 
    const handleClick = () => {
        setClick(!click)
    }

    useEffect(() => {
        showButton(); 
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ 'color': '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            TECH+
                        </NavLogo>

                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>

                        <NavMenu open={click} onClick={handleClick}>
                            <NavItem>
                                <NavLinks to='/'>
                                    Início
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/servicos'>
                                    Serviços
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/produtos'>
                                    Produtos
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='/carrinho'>
                                    <AiOutlineShoppingCart size="30" />
                                </NavLinks>
                            </NavItem>
                            {showButtonSignUp && (
                                <NavItemBtn>
                                    {button ? (
                                        <NavBtnLink to="/sign-up">
                                            <Button onClick={() => {}} fontBig big primary>
                                                Cadastre-se
                                            </Button>
                                        </NavBtnLink>
                                    ) : (
                                        <NavBtnLink to="/sign-up">
                                            <Button onClick={() => {}} fontBig big primary>
                                                Cadastre-se
                                            </Button>
                                        </NavBtnLink>
                                    )}
                                </NavItemBtn>
                            )}
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
