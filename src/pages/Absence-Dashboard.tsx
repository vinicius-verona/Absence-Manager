import { Member, MEMBERS } from "../data/members";
import { Absence, ABSENCES, getRange } from "../data/absences";
import { Dashboard } from "../styles/AbsenceDashboard";
import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import AbsenceTable from "../components/Absence-Table";
import Theme from "../styles/Theme";
import ReactPaginate from "react-paginate";

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
  let [offset, setOffset] = useState(0);
  let [absences, setAbsences] = useState(new Map<number, Absence>());
  let [pages, setPages] = useState(0);

  let members: Map<number, Member> = MEMBERS;
  let items_per_page: number = 10;
  let absences_length = ABSENCES.size;

  useEffect(() => {
    setLoading(true);
    setAbsences(
      new Map<number, Absence>(
        getRange(ABSENCES, offset, offset + items_per_page)
      )
    );
    setPages(Math.ceil(absences_length / items_per_page));

    // The timeout was used in order to show the loading page
    setTimeout(() => setLoading(false), 500);
  }, [offset, items_per_page]);

  const changePage = (props: { selected: number }) => {
    setOffset((props.selected * items_per_page) % absences_length);
  };

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
            Total number of absences in page: <strong>{absences.size}</strong>.
          </p>
          <AbsenceTable absences={absences} members={members} />
        </div>
      )}
      <ReactPaginate
        pageCount={pages}
        breakLabel={"..."}
        previousLabel={"previous"}
        nextLabel={"next"}
        onPageChange={changePage}
        containerClassName={"pagination-container"}
        breakClassName={"page"}
        breakLinkClassName={"link"}
        previousClassName={"page"}
        previousLinkClassName={"link"}
        nextClassName={"page"}
        nextLinkClassName={"link"}
        activeClassName={"active-page"}
        pageClassName={"page"}
        pageLinkClassName={"link"}
        renderOnZeroPageCount={undefined}
      />
    </Dashboard>
  );
}
