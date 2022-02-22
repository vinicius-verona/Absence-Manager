import { Member, MEMBERS } from "../data/members";
import { Absence, ABSENCES } from "../data/absences";
import { Dashboard } from "../styles/AbsenceDashboard";
import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import AbsenceTable from "../components/Absence-Table";
import Theme from "../styles/Theme";

const overrideLoading = `
  display: block;
  margin: 40vmin auto;
  align-self: center;
  justify-self: center;
  border-color: red;
`;

type JSONData = {
  absences: Map<number, Absence>;
  members: Map<number, Member>;
};

export default function AbsenceDashboard() {
  let [loading, setLoading] = useState(false);
  let [absences, setAbsences] = useState(new Map<number, Absence>());
  let [members, setMembers] = useState(new Map<number, Member>());

  useEffect(() => {
    setLoading(true);
    setAbsences(ABSENCES);
    setMembers(MEMBERS);
    setTimeout(() => setLoading(false), 2000);
    // setLoading(false);
  }, [ABSENCES, MEMBERS]);

  return (
    <Dashboard>
      {loading ? (
        <PulseLoader
          css={overrideLoading}
          color={Theme.palettes.primary}
          loading={loading}
          size={20}
        />
      ) : (
        <div className="absence-table">
          <p>
            Total number of absences: <strong>{absences.size}</strong>.
          </p>
          <AbsenceTable absences={absences} members={members} />
        </div>
      )}
    </Dashboard>
  );
}
