import { Tournament } from "@/types/tournament";

export type LAN = {
  id: string;
  name: string;
  year: string;
  tournaments: Tournament[];
};