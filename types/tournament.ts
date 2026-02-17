import { BracketType } from "./brackets"
import {Person} from "./person"


export interface Game {
  id: string
  name: string
  platform?: string
}

export type Tournament = {
  id: string
  name: string
  contestants: Person[]
  matches: Match[]
  game: Game
  bracket: BracketType
}


export type Match = {
  id: string
  locked: boolean // Hvis matchen er annonsert, så kan den ikke endres på.
  player1: Person
  player2: Person
  winner: Person
  round: number
}

export default Tournament
