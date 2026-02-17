import {LAN} from "@/types/lan";
import Link from "next/link";



export default function LANCard({ lan }: { lan: LAN }) {
    return (
        <Link key={lan.id} href={`/lans/${lan.id}`}
            style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                padding: 12,
                border: "1px solid #e6e6e6",
                borderRadius: 8,
                maxWidth: 480,
                background: "#fff",
            }}
        >

            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#111" }}>
                        {lan.name} ({lan.year})
                    </div>
                </div>
            </div>
        </Link>
    );
}