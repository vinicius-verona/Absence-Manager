import styled from "styled-components";

export const Label = styled.label`
  background-color: ${({ theme }) => theme.palettes.primary};
  border-radius: 15px;
  padding: 5px 10px;
  font-weight: 700;
  color: white;
`;
