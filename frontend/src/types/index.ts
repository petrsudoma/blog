export type ArticleType = {
	id: string;
	title: string;
	perex: string;
	image_id: string;
	created_at: string;
	updated_at: string;
	content?: string;
	comments?: CommentType[];
};

export type CommentType = {
	id: string;
	user_id: string;
	article_id: string;
	content: string;
	created_at: string;
};

export type VoteVariant = 'like' | 'dislike';

export type VoteType = {
	id: string;
	comment_id: string;
	user_id: string;
	type: VoteVariant;
};
