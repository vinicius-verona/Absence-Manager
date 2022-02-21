import styled from "styled-components";

export const TextArea = styled.textarea`
  wrap: soft;
  resize: none;
  rows: 10;
  readonly: true;
  border-radius: 10px;
`;

export const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
