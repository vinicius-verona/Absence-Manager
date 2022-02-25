import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Absence, ABSENCES } from "../data/absences";
import {
  DateSelector,
  FilterBox,
  PageSelector,
  selectionTheme,
  TypeSelector,
} from "../styles/Filter";

type FilterType = {
  setItemsPerPage(maxPerPage: number): void;
  filterItems(absences: Map<number, Absence>): void;
};

type FilterOptions = {
  status: Array<string> | null;
  startingDate: Array<number> | null;
  endingDate: Array<number> | null;
};

const _ABSENCES = Array.from(ABSENCES);
const selectedOptions: FilterOptions = {
  status: null,
  startingDate: null,
  endingDate: null,
};

/**
 * Display the filter container with the following options:
 * * Total number of absences per page;
 * * Filter by `status`;
 * * Filter by `period` (start and end date)
 *
 * @param props Callbacks to change the parent component' state
 * * `setItemsPerPage()` - Change the number of items displayed in a page
 * * `filterItems()` - Apply the selected filters to the current absences list.
 */
export default function Filter(props: FilterType) {
  const pagesOptions = [
    { value: 10, label: "10 per page" },
    { value: 25, label: "25 per page" },
    { value: 50, label: "50 per page" },
    { value: 75, label: "75 per page" },
    { value: 100, label: "100 per page" },
  ];

  const dateOptions = [
    { value: 0, label: "January" },
    { value: 1, label: "February" },
    { value: 2, label: "March" },
    { value: 3, label: "April" },
    { value: 4, label: "May" },
    { value: 5, label: "June" },
    { value: 6, label: "July" },
    { value: 7, label: "August" },
    { value: 8, label: "September" },
    { value: 9, label: "October" },
    { value: 10, label: "November" },
    { value: 11, label: "December" },
  ];

  const absecenses_status = _ABSENCES.reduce((acc, _absence) => {
    let status = _absence[1].status;
    !acc.includes(status) ? acc.push(status) : acc;
    return acc;
  }, Array<any>());

  const statusOptions = absecenses_status.reduce((acc, status) => {
    acc.push({ value: status, label: status });
    return acc;
  }, []);

  const selectPage = (selected: any) => {
    props.setItemsPerPage(selected.value);
  };

  const filterStatus = (selected: any) => {
    selectedOptions.status = selected.map((option: any) => {
      return option.value;
    });

    let items = filterAbsences(selectedOptions);
    props.filterItems(new Map(items));
  };

  const filterStartDate = (selected: any) => {
    selectedOptions.startingDate = selected.map((option: any) => {
      return option.value;
    });

    let items = filterAbsences(selectedOptions);
    props.filterItems(new Map(items));
  };

  const filterEndDate = (selected: any) => {
    selectedOptions.endingDate = selected.map((option: any) => {
      return option.value;
    });

    let items = filterAbsences(selectedOptions);
    props.filterItems(new Map(items));
  };

  return (
    <FilterBox>
      <PageSelector>
        <p>
          <strong>Number of absences:</strong>
        </p>
        <Select
          closeMenuOnSelect={true}
          components={makeAnimated()}
          options={pagesOptions}
          onChange={selectPage}
          defaultValue={pagesOptions[0]}
          theme={selectionTheme}
          placeholder={"Items per page"}
          aria-label={"items-per-page"}
        />
      </PageSelector>

      <TypeSelector>
        <p>
          <strong>Absence status:</strong>
        </p>
        <Select
          closeMenuOnSelect={false}
          isMulti={true}
          components={makeAnimated()}
          options={statusOptions}
          onChange={filterStatus}
          theme={selectionTheme}
          placeholder={"Status"}
          aria-label={"status"}
        />
      </TypeSelector>

      <DateSelector>
        <p>
          <strong>Starting date:</strong>
        </p>
        <Select
          closeMenuOnSelect={true}
          isMulti={true}
          components={makeAnimated()}
          options={dateOptions}
          onChange={filterStartDate}
          theme={selectionTheme}
          placeholder={"Starting date"}
          aria-label={"starting-date"}
        />
      </DateSelector>

      <DateSelector>
        <p>
          <strong>Ending date:</strong>
        </p>
        <Select
          closeMenuOnSelect={true}
          isMulti={true}
          components={makeAnimated()}
          options={dateOptions}
          onChange={filterEndDate}
          theme={selectionTheme}
          placeholder={"Ending date"}
          aria-label={"ending-date"}
        />
      </DateSelector>

      <DateSelector></DateSelector>
    </FilterBox>
  );
}

const filterAbsences = (filters: FilterOptions) => {
  let absences = _ABSENCES.reduce((acc, _absence) => {
    let status = false;
    let starting_date = false;
    let ending_date = false;

    if (filters.status && filters.status.length) {
      filters.status.includes(_absence[1].status, 0)
        ? (status = true)
        : (status = false);
    } else {
      status = true;
    }

    if (filters.startingDate && filters.startingDate.length) {
      filters.startingDate.includes(
        new Date(_absence[1].startDate).getMonth(),
        0
      )
        ? (starting_date = true)
        : (starting_date = false);
    } else {
      starting_date = true;
    }

    if (filters.endingDate && filters.endingDate.length) {
      filters.endingDate.includes(new Date(_absence[1].endDate).getMonth(), 0)
        ? (ending_date = true)
        : (ending_date = false);
    } else {
      ending_date = true;
    }

    if (status && starting_date && ending_date) {
      acc.push(_absence);
    }

    return acc;
  }, Array<[number, Absence]>());

  return absences;
};
