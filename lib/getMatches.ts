/* eslint-disable react-hooks/purity */
import { useMemo } from "react";
import type { Person } from "@/types/person";
import type { Match } from "@/types/tournament";

"use client";


/**
 * Hook: takes a list of contestants and produces first-round matches.
 * - Shuffles contestants
 * - Pairs them into matches of two
 * - If odd, last match will contain a single contestant (a bye)
 *
 * Returned objects are asserted to Match to stay compatible with the repo's Match shape.
 */
export default function useMatches(contestants: Person[] = []): Match[] {
    return useMemo(() => {
        const contestantList = [...contestants];

        for (let i = contestantList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [contestantList[i], contestantList[j]] = [contestantList[j], contestantList[i]];
        }

        const matches: Match[] = [];
        for (let i = 0; i < contestantList.length; i += 2) {
            const a = contestantList[i];
            const b = contestantList[i + 1] ?? null;

            const match = {
                id: `${a.id}-${b ? b.id : "bye"}-${i}`,
                players: b ? [a, b] : [a],
                createdAt: new Date().toISOString(),
            } as unknown as Match;

            matches.push(match);
        }

        return matches;
    }, [contestants]);
}