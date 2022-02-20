import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    text-align: center;

    tr:hover td {
        background-color: ${({ theme }) => theme.palettes.lightPrimary};
    }
    .dark-row {
        background-color: ${({ theme }) => theme.palettes.light};
    }
`;
