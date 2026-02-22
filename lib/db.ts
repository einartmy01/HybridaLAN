import fs from "fs"
import path from "path"

const dbPath = path.join(process.cwd(), "data", "db.json")

export function readDB() {
  const file = fs.readFileSync(dbPath, "utf-8")
  return JSON.parse(file)
}
