import LanClient from "./clientComponent";
import { readDB } from "@/lib/db";
import { LAN } from "@/types/lan";



export default function LanPage({params}: {params: {lanID: string}}){
    const db = readDB();
    const LANs = db.lans;
    const lanId = params.lanID;
    const lan = LANs.find((l: LAN) => l.id === lanId);
    return <LanClient lan={lan} />
}