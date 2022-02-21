import styled from "styled-components";

export const TextArea = styled.textarea`
  wrap: soft;
  resize: none;
  rows: 10;
  readonly: true;
`;

export const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
