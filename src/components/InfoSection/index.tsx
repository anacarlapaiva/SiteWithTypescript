import React from 'react';
import { PropsObj } from '../../Data';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './styles';
import { Button, Container } from '../../globalStyles'
import { Link } from 'react-router-dom';
// import Image from '../../images/svg-1.svg'

const InfoSection: React.FC<PropsObj> = ({
    primary,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start,
    ligthBg = false
}) => {
    return (
        <>
          <InfoSec lightBg={ligthBg}>
            <Container>
              <InfoRow imgStart={imgStart}>
                <InfoColumn>
                  <TextWrapper>
                    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                    <Link to='/sign-up'>
                      <Button big fontBig primary={primary}>
                        {buttonLabel}
                      </Button>
                    </Link>
                  </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                  <ImgWrapper start={start}>
                    <Img src={img} alt={alt} />
                  </ImgWrapper>
                </InfoColumn>
              </InfoRow>
            </Container>
          </InfoSec>
        </>
      );
    }
    

export default InfoSection;
