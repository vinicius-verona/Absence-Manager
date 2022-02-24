import { useState } from "react";
import { render } from "react-dom";
import { Absence } from "../data/absences";
import { Member } from "../data/members";
import { Table } from "../styles/AbsenceTable";
import AbsenceInfo from "./Absence";

type TableContent = {
  absences: Map<number, Absence>;
  members: Map<number, Member>;
};

export default function AbsenceTable(props: TableContent) {
  let _absences = props.absences;
  let _members = props.members;
  let _row_counter = 0;

  let [absence, setAbsence] = useState(-1);

  const selectAbsence = (id: number) => {
    setAbsence(id);
  };

  const closeAbsence = () => {
    setAbsence(-1);
  };

  return (
    <>
      <Table data-testid={"absence-table"}>
        <thead key={"THead-Absences"}>
          <tr key={"TableHeaderRow"}>
            <th key={"TableHeader-Absence"}>Absence</th>
            <th key={"TableHeader-Member"}>Member</th>
            <th key={"TableHeader-Crew"}>Crew</th>
            <th key={"TableHeader-Type"}>Type</th>
            <th key={"TableHeader-Status"}>Status</th>
          </tr>
        </thead>
        <tbody key={"TBody-Absences"}>
          {Array.from(_absences).map((key) => {
            _row_counter += 1;
            return (
              <tr
                key={key[0]}
                className={_row_counter % 2 === 0 ? "dark-row" : ""}
                onClick={() => selectAbsence(key[0])}
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
        </tbody>
      </Table>
      {absence > 0 && (
        <AbsenceInfo
          absence={_absences.get(absence) || null}
          onChange={closeAbsence}
        />
      )}
    </>
  );
}
