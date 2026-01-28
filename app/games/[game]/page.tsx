import PlayerCard from "@/components/playerCard";
import { tournaments } from "@/data/tournaments";




type PageProps = {
  params: {
    game: keyof typeof tournaments;
  };
};

export default function GamePage({ params }: PageProps) {
  const tournament = tournaments[params.game];

  if (!tournament) {
    return <p>Tournament not found.</p>;
  }
  const { game, contestants, bracket } = tournament;
  return (
    <main style={{ padding: "1rem", maxWidth: 800 }}>
      {/* Game info */}
      <section>
        <h1>{game.name}</h1>
        {game.platform && <p>Platform: {game.platform}</p>}
        <p>Bracket type: {bracket.replace("_", " ")}</p>
        <p>Total contestants: {contestants.length}</p>
      </section>

      {/* Contestant list */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Contestants</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {contestants.map((person) => (
            <PlayerCard key={person.id} person={person} />
          ))}
        </div>
      </section>
    </main>
  );
}
