import { Member, MEMBERS } from "../data/members";
import { Absence, ABSENCES, getRange } from "../data/absences";
import {
  Content,
  Dashboard,
  overrideLoading,
} from "../styles/AbsenceDashboard";
import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import AbsenceTable from "../components/Absence-Table";
import Theme from "../styles/Theme";
import ReactPaginate from "react-paginate";
import Filter from "../components/Filter";

export default function AbsenceDashboard() {
  let [loading, setLoading] = useState(false);
  let [offset, setOffset] = useState(0);
  let [absences, setAbsences] = useState(new Map<number, Absence>());
  let [pages, setPages] = useState(0);
  let [items_per_page, setItemsPerPage] = useState(10);
  let [absences_length, setAbsencesLength] = useState(ABSENCES.size);
  let [filtered_absences, setFilteredAbsences] = useState(ABSENCES);

  let members: Map<number, Member> = MEMBERS;

  useEffect(() => {
    setLoading(true);
    setAbsences(
      new Map<number, Absence>(
        getRange(filtered_absences, offset, offset + items_per_page)
      )
    );

    setPages(Math.ceil(absences_length / items_per_page));
    setLoading(false);
  }, [offset, items_per_page, filtered_absences, absences_length]);

  const changePage = (props: { selected: number }) => {
    setOffset((props.selected * items_per_page) % absences_length);
  };

  const changePageLength = (_maxPerPage: number) => {
    changePage({ selected: 0 });
    setItemsPerPage(_maxPerPage);
    setPages(Math.ceil(absences_length / items_per_page));
  };

  const filterDashboard = async (_absences: Map<number, Absence>) => {
    setFilteredAbsences(_absences);
    setAbsencesLength(_absences.size);
    setOffset(0);
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
        <Content>
          <Filter
            currentPerPage={items_per_page}
            setItemsPerPage={changePageLength}
            filterItems={filterDashboard}
          />
          <div>
            <p>
              Total number of absences in page: <strong>{absences.size}</strong>{" "}
              out of <strong>{absences_length}</strong>.
            </p>
            <AbsenceTable absences={absences} members={members} />

            {pages > 1 && (
              <ReactPaginate
                forcePage={offset == 0 ? offset : undefined}
                pageCount={pages}
                onPageChange={changePage}
                breakLabel={"..."}
                previousLabel={"<"}
                nextLabel={">"}
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
              />
            )}
          </div>
        </Content>
      )}
    </Dashboard>
  );
}
