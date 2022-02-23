import styled from "styled-components";

export const TextArea = styled.textarea`
  wrap: soft;
  resize: none;
  rows: 10;
  readonly: true;
  border-radius: 10px;
  padding: 10px 10px;
  :focus {
    outline-color: ${({ theme }) => theme.palettes.primary};
  }
`;

export const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
