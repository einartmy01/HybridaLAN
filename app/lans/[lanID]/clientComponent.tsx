"use client";
import { LAN } from "@/types/lan";
import { Tournament } from "@/types/tournament";
import Link from "next/link";



export default function LanClient({lan}:{lan: LAN}){
    //const lan: LAN = LANtest//.find((l) => l.id === lanId) as LAN;
    console.log("LAN data:", lan);
    if (!lan) {
        return <div>LAN not found</div>;
    }

    return (
        <div>
            <h1>Velkommen til Hybrida LAN: {lan.name} </h1>
            <div style={{
                marginTop: 8,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                fontSize: 13,
                color: "#666",
                alignItems: "center",
            }}>
                    
            {lan.tournaments && lan.tournaments.length > 0 ? (
                lan.tournaments.map((t: Tournament) => (
                    <Link
                        key={t.id ?? t.name}
                        href={`/lans/${lan.id}/games/${t.game.id}`}
                        style={{
                            padding: "6px 10px",
                            background: "#f5f5f5",
                            borderRadius: 6,
                            color: "#333",
                            textDecoration: "none",
                            fontSize: 13,
                        }}
                    >
                        {t.name}
                    </Link>
                ))
            ) : (
                <div style={{ color: "#999" }}>No tournaments</div>
            )}
            </div>
            <Link href={`/lans/${lan.id}/playerpage`} style={{
                display: "inline-block",
                marginTop: 16,
                padding: "8px 12px",
                background: "#0070f3",
                color: "#fff",
                borderRadius: 6,
                textDecoration: "none",
                fontSize: 14,
            }}>
                Se deltakere
            </Link>
        </div>
    )
}