import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import AbsenceInfo from "./Absence";
import { MEMBERS } from "../data/members";

describe("Render absence modal on page", () => {
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

  const member = MEMBERS.get(absence.userId);

  if (!member) {
    throw "Member not found";
  }

  it("Should render exit button", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceInfo absence={absence} onChange={() => {}} />
      </ThemeProvider>
    );

    expect(getByTestId("exit-button")).toBeInTheDocument();
  });

  it("Should render modal title", () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceInfo absence={absence} onChange={() => {}} />
      </ThemeProvider>
    );

    expect(getByText(`Absence ${absence.id}`)).toBeInTheDocument();
  });

  it("Should render all absence's labels and content", () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceInfo absence={absence} onChange={() => {}} />
      </ThemeProvider>
    );

    const labels = getAllByTestId("content-label");
    const values = getAllByTestId("content-value");
    expect(labels.length).toBe(5);
    expect(values.length).toBe(5);
  });

  it("Should render absence' status and content", () => {
    const { getByText } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceInfo absence={absence} onChange={() => {}} />
      </ThemeProvider>
    );

    expect(getByText(absence.status)).toBeInTheDocument();
  });

  it("Should NOT render absence' member note", () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceInfo absence={absence} onChange={() => {}} />
      </ThemeProvider>
    );

    expect(queryByTestId("member-note")).not.toBeInTheDocument();
  });

  it("Should NOT render absence' admitter note", () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceInfo absence={absence} onChange={() => {}} />
      </ThemeProvider>
    );

    expect(queryByTestId("admitter-note")).not.toBeInTheDocument();
  });

  it("Should render absence' member note", () => {
    absence.memberNote = "Member note test";
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceInfo absence={absence} onChange={() => {}} />
      </ThemeProvider>
    );

    expect(getByTestId("member-note")).toBeInTheDocument();
  });

  it("Should render absence' admitter note", () => {
    absence.admitterNote = "Admitter note test";
    const { getByTestId } = render(
      <ThemeProvider theme={Theme}>
        <AbsenceInfo absence={absence} onChange={() => {}} />
      </ThemeProvider>
    );

    expect(getByTestId("admitter-note")).toBeInTheDocument();
  });
});
