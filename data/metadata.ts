import { Tournament, Game } from "@/types/tournament";
import { Person } from "@/types/person";
import { LAN } from "@/types/lan";

export const LANtest: LAN = {
  id: "lan-5",
  name: "Hybrida LAN test",
  year: "2026",
  tournaments: [],
};

export const marioKart: Game = {
  id: "game-mariokart",
  name: "Mario Kart",
  platform: "Nintendo Switch",
};
export const smash: Game = {
  id: "game-smash",
  name: "Smash Bros",
  platform: "Nintendo Switch",
};

export const people: Person[] = Array.from({ length: 22 }, (_, index) => {
  const name = index > 13 ? `SmashPlayer ${index - 13}` : `MKPlayer ${index + 1}`;
  
  return {
  name,
  id: `person-${index + 1}`,
  }
  
});



export const marioKartTournament: Tournament = {
  id: "tournament-1",
  name: "Mario Kart Double Elimination Cup",
  game: marioKart,
  bracket: "double_elimination",
  contestants: people.slice(0, 13),
  matches: [],
};

export const smashTournament: Tournament = {
  id: "tournament-2",
  name: "Smash Bros Single Elimination Cup",
  game: smash,
  bracket: "single_elimination",
  contestants: people.slice(13),
  matches: [],
};

export const LANData: LAN[] = [
    {
        id: "lan-1",
        name: "Oslo LAN 2023",
        year: "2023",
        tournaments: [],
    },
    {
        id: "lan-2",
        name: "Bergen LAN 2023",
        year: "2023",
        tournaments: [],
    },
    {
        id: "lan-3",
        name: "Trondheim LAN 2024",
        year: "2024",
        tournaments: [],
    },
    {
        id: "lan-4",
        name: "Stavanger LAN 2024",
        year: "2024",
        tournaments: [],
    },
];

LANtest.tournaments.push(marioKartTournament, smashTournament);

LANData.push(LANtest);