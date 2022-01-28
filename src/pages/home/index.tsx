import React from 'react';
import Footer from '../../components/Footer';
import InfoSection  from '../../components/InfoSection';
import Navbar   from '../../components/Navbar';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../../Data';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
    );
};

export default Home;
