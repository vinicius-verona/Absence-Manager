import {
    AbsenceCard,
    Avatar,
    CloseBttn,
    Container,
    GridInfo,
    Header,
    Modal,
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

    return (
        <Modal key={"-Modal"}>
            <AbsenceCard key={_id + "-Card"}>
                <Header>
                    <h2 key={_id + "-CardTitle"}>Absence {_id}</h2>
                    <CloseBttn key={_id + "-Bttn"}>&times;</CloseBttn>
                </Header>

                <Container key={_id + "-Info"}>
                    <p>
                        <strong>Member:</strong> {member?.name}
                    </p>
                    <p>
                        <strong>Type:</strong> {props.absence?.type}
                    </p>

                    <NoteContainer content={absence.memberNote} />
                    <Status content={absence.status} />
                    <NoteContainer content={absence.admitterNote} />
                </Container>
            </AbsenceCard>
        </Modal>
    );
}
