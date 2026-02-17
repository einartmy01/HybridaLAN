import { LANtest } from "@/data/metadata";
import { Person } from "@/types/person";
export function removePlayer(person: Person) {

    for (const tournament of LANtest.tournaments) {
        if (tournament.contestants.some((p) => p.id === person.id)) {
            tournament.contestants = tournament.contestants.filter((p) => p.id !== person.id);
            console.log(`Removed player ${person.name} from tournament ${tournament.name}`);
        }
    }
    
}
