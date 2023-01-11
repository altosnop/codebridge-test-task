export type Article = {
	id: number;
	title: string;
	imageUrl: string;
	summary: string;
	updatedAt: string;
};

export type ArticlesState = {
	items: Article[];
	filter: string;
	totalItems: number;
	loading: boolean;
};

export type CardProps = {
	imgUrl: string;
	date: string;
	title: string;
	description: string;
};
