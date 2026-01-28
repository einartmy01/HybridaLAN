import React from "react";
import { Person , PlayerProps} from "../types/person";


const initials = (name: string) =>
	name
		.split(" ")
		.map((n) => n[0])
		.slice(0, 2)
		.join("")
		.toUpperCase();

export default function PlayerCard({ person, className }: PlayerProps) {
	return (
		<div
			className={className}
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
			<div
				style={{
					width: 64,
					height: 64,
					borderRadius: "50%",
					overflow: "hidden",
					background: "#f0f0f0",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontWeight: 600,
					fontSize: 20,
					color: "#555",
				}}
			>
				{person.avatarUrl ? (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						src={person.avatarUrl}
						alt={person.name}
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
				) : (
					initials(person.name)
				)}
			</div>

			<div style={{ flex: 1, minWidth: 0 }}>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div style={{ fontSize: 16, fontWeight: 700, color: "#111" }}>
						{person.name}
					</div>
					{person.title && (
						<div style={{ fontSize: 12, color: "#666", marginLeft: 8 }}>
							{person.title}
						</div>
					)}
				</div>
				<div
					style={{
						marginTop: 8,
						display: "flex",
						gap: 12,
						fontSize: 13,
						color: "#666",
						alignItems: "center",
					}}
				>
				</div>
			</div>
		</div>
	);
}

