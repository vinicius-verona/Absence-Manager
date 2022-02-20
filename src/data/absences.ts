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
};

/**
 * Each absence from `absences.json` is inserted into a map.
 *
 * @returns Map<number, Absence> with absence's `id` as key.
 */
export function getAbsences() {
    const absences = new Map<number, Absence>();

    _absences.payload.forEach((_absence) => {
        absences.set(_absence.id, _absence as Absence);
    });

    return absences;
}
