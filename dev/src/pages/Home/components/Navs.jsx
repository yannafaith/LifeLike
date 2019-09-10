import React from 'react';
import { Nav, SiteName, NavLinks } from '../styles.js';

export const HomeHeader = () => {
    return (
        <Nav>
            <SiteName> Life<span>Like</span> </SiteName>
            <NavLinks>
                <a href='http://localhost:3000/#about' > About </a>
                <a href='http://localhost:3000/#research' > Research </a>
                <a href='http://localhost:3000/#workflows' > Work Flows </a>
                <a href='http://localhost:3000/#contact' > Contact </a>
                <button> Login </button>
            </NavLinks>
        </Nav>
    );
}

export const HomeFooter = () => {
    return (
        <Nav reverse >
            <SiteName> Life<span>Like</span> </SiteName>
            <NavLinks>
            <a href='http://localhost:3000/#about' > About </a>
                <a href='http://localhost:3000/#research' > Research </a>
                <a href='http://localhost:3000/#workflows' > Work Flows </a>
                <a href='http://localhost:3000/#contact' > Contact </a>
                <button> Login </button>
            </NavLinks>
        </Nav>
    );
}
