import { Member, MEMBERS } from "../data/members";
import { Absence, ABSENCES } from "../data/absences";
import { Dashboard } from "../styles/AbsenceDashboard";
import AbsenceTable from "../components/Absence-Table";

export default function AbsenceDashboard() {
    let absences: Map<number, Absence> = ABSENCES;
    let members: Map<number, Member> = MEMBERS;

    return (
        <Dashboard>
            <p>
                Total number of absences: <strong>{absences.size}</strong>.
            </p>
            <AbsenceTable absences={absences} members={members} />
        </Dashboard>
    );
}
