
export type Person = {
    id: string;
	name: string;
	avatarUrl?: string;
};

export type PlayerProps = {
	person: Person;
	className?: string;
};