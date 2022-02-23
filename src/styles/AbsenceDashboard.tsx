import styled from "styled-components";

export const Dashboard = styled.div`
  display: block;
  width: 100%;
  min-width: 500px;
  align-items: center;
  justify-content: center;
  padding: 5vh 30px;
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

  .pagination-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .active-page {
    color: white;
    background-color: ${({ theme }) => theme.palettes.primary};
    font-weight: 700;
  }

  .page {
    display: flex;
    list-style: none;
    height: 40px;
    padding: 0px 10px;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.palettes.primary};
    margin: 2px;

    :hover {
      background-color: ${({ theme }) => theme.palettes.lightPrimary};
    }
  }

  .link {
    decoration: none;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
`;
