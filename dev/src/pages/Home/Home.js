import React from 'react';
import { HomeHeader, HomeFooter } from './components/Navs.jsx';
import { StyledHomeWrapper } from './styles.js';

const Home = () => {
    return (
        <StyledHomeWrapper>
            <HomeHeader/>
            <section id="about" >
                <h2> It's your life. Change it. </h2> 
                <p> Eventually, you need to put all that Self Help stuff you've learned to work. We can help. </p>
            </section>
            <section id="research" >
                <h2> Our Workflows are backed by Study. </h2> 
                <p> Eventually, you need to put all that Self Help stuff you've learned to work. </p>
            </section>
            <section id="workflows" >
                <h2> Check out our Tutorials. </h2> 
                <p> Eventually, you need to put all that Self Help stuff you've learned to work. </p>
            </section>
            <section id="contact" >
                <h2> Contact the Team. </h2> 
                <p> Eventually, you need to put all that Self Help stuff you've learned to work. </p>
            </section>
            <HomeFooter/>
        </StyledHomeWrapper>
    );
}

export default Home;

