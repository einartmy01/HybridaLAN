import { Tournament, Game } from "@/types/tournament";
import { Person } from "@/types/person";


export const marioKart: Game = {
  id: "game-mariokart",
  name: "Mario Kart",
  platform: "Nintendo Switch",
};

export const mkpeople: Person[] = Array.from({ length: 13 }, (_, index) => ({
  id: `person-${index + 1}`,
  name: `MKPlayer ${index + 1}`,
}));

export const speople: Person[] = Array.from({ length: 13 }, (_, index) => ({
  id: `person-${index + 1}`,
  name: `SPlayer ${index + 1}`,
}));


export const marioKartTournament: Tournament = {
  id: "tournament-1",
  name: "Mario Kart Double Elimination Cup",
  game: marioKart,
  bracket: "double_elimination",
  contestants: mkpeople,
};

export const smashTournament: Tournament = {
  id: "tournament-2",
  name: "Smash Bros Single Elimination Cup",
  game: marioKart,
  bracket: "single_elimination",
  contestants: speople,
};

