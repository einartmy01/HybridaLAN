"use client";
import { LAN } from "@/types/lan";
import { Tournament } from "@/types/tournament";
import { LANData } from "@/data/metadata";
import Link from "next/link";
import { use } from "react";

type Props = {
    params: Promise<{
    lanID : string;
    }>;
}
export default function LanPage({params}: Props){
    const lanId = use(params).lanID;
    const lan: LAN = LANData.find((l) => l.id === lanId) as LAN;
    console.log("LAN data:", lan);
    console.log(lanId)
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
        </div>
    )
}