import { NoteWrapper, TextArea } from "../styles/NoteContainer";

type NoteContent = {
  label: string;
  content: string;
};

export default function NoteContainer(props: NoteContent) {
  return (
    <NoteWrapper>
      <label>
        <strong>{props.label}</strong>
      </label>
      <TextArea readOnly={true} value={props.content} />
    </NoteWrapper>
  );
}
