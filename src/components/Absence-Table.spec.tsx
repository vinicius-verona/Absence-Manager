import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Absence } from "../data/absences";
import { Member, MEMBERS } from "../data/members";
import Theme from "../styles/Theme";
import AbsenceInfo from "./Absence";
import AbsenceTable from "./Absence-Table";

describe("Render absence table on page", () => {
  const absence = {
    admitterId: null,
    admitterNote: "",
    confirmedAt: "2020-12-12T18:03:55.000+01:00",
    createdAt: "2020-12-12T14:17:01.000+01:00",
    crewId: 352,
    endDate: "2021-01-13",
    id: 2351,
    memberNote: "",
    rejectedAt: null,
    startDate: "2021-01-13",
    type: "sickness",
    userId: 2664,
    status: "Confirmed",
  };

  const absences = new Map<number, Absence>();
  absences.set(absence.id, absence);

  const member = MEMBERS.get(absence.userId);
  if (!member) {
    throw "Unexisting member";
  }

  const members = new Map<number, Member>();
  members.set(member.userId, member);

  if (!member) {
    throw "Member not found";
  }

  it("Should render table", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceTable absences={absences} members={members} />
      </ThemeProvider>
    );

    expect(getByTestId("absence-table")).toBeInTheDocument();
  });

  it("Should render absence row", async () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceTable absences={absences} members={members} />
      </ThemeProvider>
    );

    expect(getByText(absence.id)).toBeInTheDocument();
    expect(getByText(member.name)).toBeInTheDocument();
    expect(getByText(member.crewId)).toBeInTheDocument();
    expect(getByText(absence.type)).toBeInTheDocument();
    expect(getByText(absence.status)).toBeInTheDocument();
  });
});
