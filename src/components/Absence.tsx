import {
  AbsenceCard,
  CloseBttn,
  Container,
  Header,
  Modal,
  TextDiv,
} from "../styles/Absence";
import { Absence } from "../data/absences";
import { MEMBERS } from "../data/members";
import NoteContainer from "./NoteContainer";
import Status from "./Status";

type InfoCard = {
  absence: Absence | null;
  onChange(): void;
};

/**
 * The absence card selected.
 *
 * It displays:
 * * Member name
 * * Absence type
 * * Absence period
 * * Member note
 * * Status label
 * * Admitter note
 */
export default function AbsenceInfo(props: InfoCard) {
  const onChange = () => {
    props.onChange();
  };

  const sleep = (ms: any) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const test = async () => {
    await sleep(3000);
    onChange();
  };

  // test();

  let absence = props.absence;
  if (!absence) {
    return <></>;
  }

  let member = MEMBERS.get(absence.userId);
  let _id = props.absence?.id;

  if (!member) {
    return <></>;
  }

  return (
    <Modal key={"-Modal"}>
      <AbsenceCard key={_id + "-Card"}>
        <Header>
          <h2 key={_id + "-CardTitle"}>Absence {_id}</h2>
          <CloseBttn key={_id + "-Bttn"}>&times;</CloseBttn>
        </Header>

        <Container key={_id + "-Info"}>
          <Text label={"Member: "} content={member.name} />
          <Text label={"User ID: "} content={member.userId} />
          <Text label={"Type: "} content={absence.type} />

          <Text label={"Start Date: "} content={absence.startDate} />
          <Text label={"End Date: "} content={absence.endDate} />

          <Status content={absence.status} />

          {absence.memberNote.length > 0 && (
            <NoteContainer label={"Member Note"} content={absence.memberNote} />
          )}
          {absence.admitterNote.length > 0 && (
            <NoteContainer
              label={"Admitter Note"}
              content={absence.admitterNote}
            />
          )}
        </Container>
      </AbsenceCard>
    </Modal>
  );
}

type InfoType = {
  label: string;
  content: string | number;
};

/**
 * Display a text with a label and a content.
 *
 * @param props - Is an object with label and content.
 * * `label` - **string**
 * * `content` - **string | number**
 */
const Text = (props: InfoType) => {
  if (!props || !props.content) {
    return <></>;
  }

  return (
    <TextDiv>
      <label>
        <strong>{props.label}</strong>
      </label>
      <p>{props.content}</p>
    </TextDiv>
  );
};
