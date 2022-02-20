import { Member, getMembers } from "../data/members";
import { Absence, getAbsences } from "../data/absences";

export default function AbsenceDashboard() {
    let absences: Map<number, Absence> = getAbsences();
    let members: Map<number, Member> = getMembers();

    return (
        <div>
            <h1>Hello World!</h1>
            <p>Project with some configurations</p>

            <p>
                There is a total of {members.size} members and {absences.size}{" "}
                absences in the project.
            </p>

            {Array.from(absences).map((key) => {
                return (
                    <p key={key[0]}>
                        Absence <strong>{key[0]}</strong> is related to{" "}
                        <strong>{members.get(key[1].userId).name}</strong>.
                    </p>
                );
            })}
        </div>
    );
}
