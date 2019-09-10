import React from 'react';
import { Nav } from '../styles.js';

export const HomeHeader = () => {
    return (
        <Nav>
            <h2 className='siteName' > Life<span>Like</span></h2>
            <div className='links'>
                <a href='#' > About </a>
                <a href='#' > Research </a>
                <a href='#' > Work Flows </a>
                <a href='#' > Contact </a>
                <a href='#' > Login </a>
            </div>
        </Nav>
    );
}

export const HomeFooter = () => {
    return (
        <Nav reverse >
            <h2 className='siteName' > Life<span>Like</span></h2>
            <div className='links'>
                <a href='#' > About </a>
                <a href='#' > Research </a>
                <a href='#' > Work Flows </a>
                <a href='#' > Contact </a>
                <a href='#' > Login </a>
            </div>
        </Nav>
    );
}
