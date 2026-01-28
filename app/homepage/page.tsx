import PlayerCard from "@/components/playerCard"

export default function Homepage(){
    return (
        <div><h1>Velkommen til Hybrida LAN</h1>
        <PlayerCard person={{id: "alan-turing", name: "Alan Turing", title: "Pioneer of Computer Science"}} />
        </div>
    )
}