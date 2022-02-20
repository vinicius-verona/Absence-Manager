import { Absence } from "../data/absences";
import { Member } from "../data/members";
import { Table } from "../styles/AbsenceTable";

type TableContent = {
    absences: Map<number, Absence>;
    members: Map<number, Member>;
};

export default function AbsenceTable(props: TableContent) {
    let _absences = Array.from(props.absences);
    let _members = props.members;
    let row_counter = 0;

    return (
        <Table>
            <tr>
                <th>Absence</th>
                <th>Member</th>
                <th>Crew</th>
                <th>Type</th>
                <th>Status</th>
            </tr>
            {_absences.map((key) => {
                row_counter += 1;
                return (
                    <tr
                        key={key[0]}
                        className={row_counter % 2 === 0 ? "dark-row" : ""}
                    >
                        <td key={key[0] + "-c1"}>{key[0]}</td>
                        <td key={key[0] + "-c2"}>
                            {_members.get(key[1]?.userId)?.name}
                        </td>
                        <td key={key[0] + "-c3"}>
                            {_members.get(key[1]?.userId)?.crewId}
                        </td>
                        <td key={key[0] + "-c4"}>{key[1].type}</td>
                        <td key={key[0] + "-c5"}>{key[1].status}</td>
                    </tr>
                );
            })}
        </Table>
    );
}
