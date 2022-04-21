import React from 'react';
import MainSlide from '../component/MainSlide';
import Menu from '../component/Menu';
import MainPopular from '../component/MainPopular';
import MainNew from '../component/MainNew';
import MainEvent from '../component/MainEvent';
import Footer from '../component/Footer';
import BottomFixed from '../component/BottomFixed';

function MainPage() {
    return (
      <>
        <Menu />
        <MainSlide />
        <MainPopular />
        <MainNew />
        <MainEvent />
        <Footer />
        <BottomFixed />
      </>
    );
  }

export default MainPage;