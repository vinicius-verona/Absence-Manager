import _members from "./members.json";

type Member = {
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
