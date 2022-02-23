import { Theme } from "react-select";
import styled from "styled-components";
import theme from "./Theme";

export const FilterBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-height: 400px;
  align-items: center;
  padding: 15px 15px;
  border: 1px solid ${theme.palettes.primary};
  border-radius: 15px;

  p {
    margin-top: 0;
    margin-bottom: 0;
    padding: 5px;
    padding-left: 0px;
  }

  :hover {
    box-shadow: 1px 1px 5px ${theme.palettes.lightPrimary};
  }

  @media screen and (max-width: 600px) {
    max-height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
export const PageSelector = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const TypeSelector = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const DateSelector = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

/**
 * Style as demanded by "react-select".
 *
 * The `default_theme` parameter is passed automatically by the
 * `Select` component.
 */
export function selectionTheme(default_theme: Theme) {
  return {
    ...default_theme,
    colors: {
      ...default_theme.colors,
      primary: theme.palettes.primary,
      primary25: theme.palettes.lightPrimary,
    },
  };
}
