import { readDB } from "@/lib/db";
import { LAN } from "@/types/lan";
import HomeClient from "./clientComponent";


export default function HomePage() {
    const db = readDB();
    const LANs: LAN[] = db.lans;
    return (
        <HomeClient initialLANs={LANs} />
    );
}