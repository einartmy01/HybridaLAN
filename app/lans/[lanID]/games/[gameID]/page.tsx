"use client";
import PlayerCard from "@/components/playerCard";
import { use, useState } from "react";
import { Person } from "@/types/person";
import { removePlayer } from "@/lib/removePlayer";
import { LANData } from "@/data/metadata";
import { LAN } from "@/types/lan";


type PageProps = {
  params: Promise<{
    lanID: string
    gameID: string;
  }>;
};

export default function GamePage({ params }: PageProps) {

  const {lanID, gameID}  =  use(params);
  const lan = LANData.find((l) => l.id === lanID) as LAN;
  const [tournament, setTournament] = useState(lan.tournaments.find((t) => t.game.id === gameID));


  console.log("Tournament data:", tournament);
  if (!tournament) {
    return <p>Tournament not found.</p>;
  }
  const contestants = tournament.contestants;

  function handleRemovePlayer(person: Person) {
    const oldTournament = tournament;
    removePlayer(person);
    setTournament(oldTournament);
  }


  const { game: gameData, bracket } = tournament;
  return (
    <main style={{ padding: "1rem", maxWidth: 800 }}>
      {/* Game info */}
      <section>
        <h1>{gameData.name}</h1>
        {gameData.platform && <p>Platform: {gameData.platform}</p>}
        <p>Bracket type: {bracket.replace("_", " ")}</p>
        <p>Total contestants: {contestants.length}</p>
      </section>

      {/* Contestant list */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Contestants</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {contestants.map((person) => (
            <PlayerCard key={person.id} person={person} removePlayer={handleRemovePlayer}/>
          ))}
        </div>
      </section>
    </main>
  );
}
