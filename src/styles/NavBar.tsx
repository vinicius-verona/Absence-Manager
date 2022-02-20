import styled from "styled-components";

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.palettes.primary};
    padding: 0px 30px;
    min-width: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    z-index: 10;
    top: 0;
    left: 0;

    @media screen and (max-width: 500px) {
        padding: 0px 10%;
        justify-content: center;
    }
`;

export const NavTitle = styled.div`
    width: 100vw;
    height: 100%;
    align-items: center;
    position: relative;
`;

export const Title = styled.h1`
    color: white;
    font-weight: 600;
    text-align: center;
    font-size: 1.5rem;
`;

export const Logo = styled.img`
    height: 1.125rem;
    position: absolute;

    @media screen and (max-width: 690px) {
        visibility: hidden;
    }
`;
