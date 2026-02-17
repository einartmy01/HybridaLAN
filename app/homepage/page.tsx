"use client";
import { useState } from "react";
import  LANCard from "@/components/lanCards";
import { LAN } from "@/types/lan";
import { LANData } from "@/data/metadata";


export default function Page() {
    const [LANs, setLANs] = useState<LAN[]>(LANData);
    const [page, setPage] = useState(0);
    const perPage = 10;
    const pageCount = Math.max(1, Math.ceil(LANs.length / perPage));
    const start = page * perPage;
    const visible = LANs.slice(start, start + perPage);

    function addLAN() {
        const id = `LAN-${Date.now()}`;
        const newLAN: LAN = {
            id,
            name: `New LAN (${LANs.length + 1})`,
            year: "2026",
            tournaments: [],
        };
        setLANs((s) => [newLAN, ...s]);
        setPage(0);
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
            <section className="w-full max-w-4xl flex flex-col items-center gap-6">
                <h1 className="text-2xl font-bold">LANs</h1>

                <div className="w-full overflow-x-auto">
                    <div className="flex gap-4 items-stretch py-2 px-1">
                        {visible.map((LAN) => (
                            <LANCard key={LAN.id} lan={LAN}/>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        className="px-3 py-1 rounded bg-slate-200 disabled:opacity-50"
                        onClick={() => setPage((p) => Math.max(0, p - 1))}
                        disabled={page === 0}
                    >
                        Prev
                    </button>

                    <div className="flex gap-2">
                        {Array.from({ length: pageCount }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                className={`px-3 py-1 rounded ${i === page ? "bg-slate-700 text-white" : "bg-slate-100"}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        className="px-3 py-1 rounded bg-slate-200 disabled:opacity-50"
                        onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
                        disabled={page >= pageCount - 1}
                    >
                        Next
                    </button>
                </div>
            </section>

            <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
                <button
                    onClick={addLAN}
                    className="px-5 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700"
                >
                    Add New LAN
                </button>
            </div>
        </main>
    );
}