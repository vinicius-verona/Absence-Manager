import { Label } from "../styles/Status";

type StatusContent = {
  content: string;
};

export default function Status(props: StatusContent) {
  return (
    <div>
      <label>
        <strong>Status: </strong>
      </label>
      <Label>{props.content}</Label>
    </div>
  );
}
