import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './styles';
import { Link } from 'react-router-dom';
import Nav from '../../components/Navbar';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1' }}>
      <Nav />
      <PricingSection>
        <PricingWrapper>
          <Link to="/">Voltar ao início</Link>
          <PricingHeading>Nossos cursos</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Pacote inicial</PricingCardPlan>
                <PricingCardCost>R$100,00</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Pacote com todos os cursos</PricingCardFeature>
                  <PricingCardFeature>Acesso limitado</PricingCardFeature>
                  <PricingCardFeature>Sem fórum para dúvidas</PricingCardFeature>
                </PricingCardFeatures>
                <Button fontBig big primary>Comprar!</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Pacote Ouro</PricingCardPlan>
                <PricingCardCost>R$200,00</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Pacote com todos os cursos</PricingCardFeature>
                  <PricingCardFeature>Acesso ilimitado</PricingCardFeature>
                  <PricingCardFeature>Sem fórum para dúvidas</PricingCardFeature>
                </PricingCardFeatures>
                <Button fontBig big primary>Comprar</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Pacote Diamante</PricingCardPlan>
                <PricingCardCost>R$500,00</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                <PricingCardFeature>Pacote com todos os cursos</PricingCardFeature>
                  <PricingCardFeature>Acesso ilimitado</PricingCardFeature>
                  <PricingCardFeature>Suporte 24/7</PricingCardFeature>
                </PricingCardFeatures>
                <Button fontBig big primary>Comprar</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;