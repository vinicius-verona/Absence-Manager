import { Label } from "../styles/Status";

type StatusContent = {
  content: string;
};

/**
 * The `Status` component returns a status with its content styled in order to stand-out.
 * @param props.content - the status value
 */
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
