"use client"
import PlayerCard from "@/components/playerCard"
import { people } from "@/data/metadata";
import { removePlayer } from "@/lib/removePlayer";
import { Person } from "@/types/person";
import { useState } from "react";



export default function PlayerPage(){

    const [players, setPlayers] = useState(people);

    function handleRemovePlayer(person: Person) {
        removePlayer(person);
        setPlayers(people);
    }

    return (
        <div><h1>Deltakere</h1>
        <div>
            {players.map((person) => (<PlayerCard key={person.id} person={person} removePlayer={handleRemovePlayer} />))}
        </div>
        </div>
    )
}