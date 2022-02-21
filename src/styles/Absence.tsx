import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.palettes.bg_dark};
    opacity: 1;
    transform: scale(1);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
    z-index: 11;
    backdrop-filter: blur(2px);
    align-items: center;
    justify-content: center;
    min-width: 500px;
`;

export const AbsenceCard = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 15px 15px;
    width: 50vw;
    max-width: 800px;
    border-radius: 0.5rem;
`;

export const Header = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 95% auto;
    grid-template-rows: 1.5rem;
    height: length;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
`;

export const CloseBttn = styled.span`
    float: right;
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.palettes.primary};

    :hover {
        background-color: ${({ theme }) => theme.palettes.darkerLight};
    }
`;

export const Container = styled.div`
    display: block;
    align-items: center;
    justify-content: center;

    p {
        text-align: center;
    }
`;
