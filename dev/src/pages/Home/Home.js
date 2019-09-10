import React from 'react';
import { HomeHeader, HomeFooter } from './comps/HomeNav.jsx';
import { StyledHomeWrapper } from './styles.js';

const Home = () => {
    return (
        <StyledHomeWrapper>
            <HomeHeader/>
            <HomeFooter/>
        </StyledHomeWrapper>
    );
}

export default Home;

