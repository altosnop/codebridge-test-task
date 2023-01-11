export type TArticle = {
	id: number;
	title: string;
	imageUrl: string;
	summary: string;
	updatedAt: string;
};

export type TArticlesState = {
	items: TArticle[];
	filter: string;
	totalItems: number;
	loading: boolean;
};

export type TCardProps = {
	id: number;
	imgUrl: string;
	date: string;
	title: string;
	description: string;
};
