import { marioKartTournament } from "@/data/metadata";
import { smashTournament } from "@/data/metadata";

export const tournaments = { 
  mariokart: marioKartTournament, 
  smash: smashTournament 
} as const;

