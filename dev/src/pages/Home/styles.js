import styled from 'styled-components';

export const StyledHomeWrapper = styled.div`{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}`

export const Nav = styled.nav`{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid palevioletred 2px;
    height: 50px;
    color: ${ props => props.reverse ? "palevioletred" : "purple" };
    flex-direction: ${ props => props.reverse ? "row-reverse" : "row" };

    .siteName {
        font-size: 1.3rem;
        letter-spacing: 7px;
        width: 190px;
        text-align: center;

        span {
            letter-spacing: 10px;
        }
    }

    .links {
        width: 500px;
        display: flex;
        justify-content: space-around;

        a {
            text-decoration: none;
            color: black;
        }
    }

}`

