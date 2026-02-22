import fs from "fs"
import path from "path"

const dbPath = path.join(process.cwd(), "data", "db.json")

const people = Array.from({ length: 22 }, (_, index) => {
  const name =
    index > 13
      ? `SmashPlayer ${index - 13}`
      : `MKPlayer ${index + 1}`

  return {
    id: `person-${index + 1}`,
    name,
  }
})

const marioKart = {
  id: "game-mariokart",
  name: "Mario Kart",
  platform: "Nintendo Switch",
}

const smash = {
  id: "game-smash",
  name: "Smash Bros",
  platform: "Nintendo Switch",
}

const seedData = {
  lans: [
    {
      id: "lan-5",
      name: "Hybrida LAN test",
      year: "2026",
      tournaments: [
        {
          id: "tournament-1",
          name: "Mario Kart Double Elimination Cup",
          game: marioKart,
          bracket: "double_elimination",
          contestants: people.slice(0, 13),
          matches: [],
        },
        {
          id: "tournament-2",
          name: "Smash Bros Single Elimination Cup",
          game: smash,
          bracket: "single_elimination",
          contestants: people.slice(13),
          matches: [],
        },
      ],
    },
    {
      id: "lan-6",
      name: "Hybrida LAN Summer",
      year: "2027",
      tournaments: [
        {
          id: "tournament-3",
          name: "Mario Kart Summer Cup",
          game: marioKart,
          bracket: "single_elimination",
          contestants: people.slice(0, 8),
          matches: [],
        },
      ],
    },
  ],
}

fs.writeFileSync(dbPath, JSON.stringify(seedData, null, 2))

console.log("Database reset complete.")
