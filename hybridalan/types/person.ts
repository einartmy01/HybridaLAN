import React from "react";

export type Person = {
    id: string;
	name: string;
	title?: string;
	avatarUrl?: string;
};

export type PlayerProps = {
	person: Person;
	className?: string;
};