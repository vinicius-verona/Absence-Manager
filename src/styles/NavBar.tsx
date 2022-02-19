import styled from "styled-components";

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.palettes.primary};
    padding: 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const NavTitle = styled.div`
    width: 100%;
    height: 100%;
    align-content: center;
`;

export const Title = styled.h1`
    color: white;
    font-weight: bold;
    text-align: center;
`;

export const Logo = styled.img`
    height: 18px;
`;
