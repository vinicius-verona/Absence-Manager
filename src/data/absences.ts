import _absences from "./absences.json";

export type Absence = {
  admitterId: number | null;
  admitterNote: string;
  confirmedAt: Date | null;
  createdAt: string;
  crewId: number;
  endDate: string;
  id: number;
  memberNote: string;
  rejectedAt: Date | null;
  startDate: string;
  type: string;
  userId: number;
  status: string;
};

/**
 * Each absence from `absences.json` is inserted into a map.
 *
 * @returns Map<number, Absence> with absence's `id` as key.
 */
export function getAbsences() {
  const absences = new Map<number, Absence>();

  _absences.payload.forEach((_absence) => {
    let _content = _absence as Absence;

    if (!_absence.confirmedAt && !_absence.rejectedAt) {
      _content.status = "Requested";
    } else if (_absence.confirmedAt) {
      _content.status = "Confirmed";
    } else {
      _content.status = "Rejected";
    }

    absences.set(_content.id, _content);
  });

  return absences;
}

/**
 * Get absences within the range.
 * @param absences A Map of absences
 * @param start Index at which the slice begins
 * @param end Index at which the slice begins
 * @returns Array<[number, Absence]>
 */
export function getRange(
  absences: Map<number, Absence>,
  start: number,
  end: number
) {
  let _absences = Array.from(absences);
  return _absences.slice(start, end);
}

export const ABSENCES = getAbsences();
