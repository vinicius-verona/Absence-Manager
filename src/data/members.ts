import _members from "./members.json";

export type Member = {
  crewId: number;
  id: number;
  image: string;
  name: string;
  userId: number;
};

/**
 * Each member from `members.json` is inserted into a map.
 *
 * @returns Map<number, Member> with member's `userId` as key.
 */
export function getMembers() {
  const members = new Map<number, Member>();

  _members.payload.forEach((_member) => {
    members.set(_member.userId, _member);
  });

  return members;
}

/**
 * Get members within the range.
 * @param members A Map of members
 * @param start Index at which the slice begins
 * @param end Index at which the slice begins
 * @returns Array<[number, Member]>
 */
export function getRange(
  members: Map<number, Member>,
  start: number,
  end: number
) {
  let _members = Array.from(members);
  return _members.slice(start, end);
}

export const MEMBERS = getMembers();
