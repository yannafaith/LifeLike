import styled from 'styled-components';

export const StyledHomeWrapper = styled.div`{
    displa: flex;
    justify-content: center;
    section {
        height: 100vh

        h2 {
            text-align: center;
            font-size: 1.3rem;
            margin-top: 2%;
        }

        p {
            text-align: center;
            margin-top: 2%;
        }
    }

}`

export const SiteName = styled.h1`{
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 7px;
    width: 190px;
    span {
        letter-spacing: 10px;
    }
}`
export const NavLinks = styled.div`{
    width: 500px;
    display: flex;
    justify-content: space-around;
    a {
        text-decoration: none;
        color: black;
    }
}`

export const Nav = styled.nav`{
    ${ props => props.reverse && "position: absolute;" }
    ${ props => props.reverse && "top: 100;" }
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border${ props => props.reverse ? "-top" : "-bottom"}: solid palevioletred 1px;
    color: ${ props => props.reverse ? "palevioletred" : "purple" };
    flex-direction: ${ props => props.reverse ? "row-reverse" : "row" };
}`

