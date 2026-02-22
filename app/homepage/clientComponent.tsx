"use client"

import { useState } from "react"
import LANCard from "@/components/lanCards"
import { LAN } from "@/types/lan"

export default function HomeClient({ initialLANs }: { initialLANs: LAN[]}) {
    console.log("Initial LANs:", initialLANs);
    const [LANs, setLANs] = useState(initialLANs)
    const [page, setPage] = useState(0)

    const perPage = 10
    const pageCount = Math.max(1, Math.ceil(LANs.length / perPage))
    const start = page * perPage
    const visible = LANs.slice(start, start + perPage)

    async function addLAN() {
        const res = await fetch("/api/add-lan", {
        method: "POST",
        })

        const newLAN = await res.json()

        setLANs((s) => [newLAN, ...s])
        setPage(0)
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
        <section className="w-full max-w-4xl flex flex-col items-center gap-6">
            <h1 className="text-2xl font-bold">LANs</h1>

            <div className="w-full overflow-x-auto">
            <div className="flex gap-4 items-stretch py-2 px-1">
                {visible.map((LAN) => (
                <LANCard key={LAN.id} lan={LAN} />
                ))}
            </div>
            </div>

            <div className="flex items-center gap-3">
            <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
            >
                Prev
            </button>

            {Array.from({ length: pageCount }).map((_, i) => (
                <button key={i} onClick={() => setPage(i)}>
                {i + 1}
                </button>
            ))}

            <button
                onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
                disabled={page >= pageCount - 1}
            >
                Next
            </button>
            </div>
        </section>

        <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
            <button onClick={addLAN}>
            Add New LAN
            </button>
        </div>
        </main>
    )
}
