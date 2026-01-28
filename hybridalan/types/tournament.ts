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
  game: Game
  bracket: BracketType
}

export default Tournament
