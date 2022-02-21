import styled from "styled-components";

export const Dashboard = styled.div`
    width: 100%;
    min-width: 500px;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    text-align: center;

    tr td {
        cursor: pointer;
    }

    p {
        text-align: start;
    }

    @media screen and (max-width: 500px) {
        padding: 10px 10%;
    }
`;
