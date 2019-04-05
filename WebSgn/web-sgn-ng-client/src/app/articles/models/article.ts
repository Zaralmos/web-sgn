import { ArticleBlockImage } from './article-blocks/article-block-image';
import { ArticleBlockText } from './article-blocks/article-block-text';
import { ArticleBlockTitle } from './article-blocks/article-block-title';

export type ArticleBlock = ArticleBlockImage | ArticleBlockText | ArticleBlockTitle;
export type ArticleBlockType = 'image' | 'text' | 'title';
export interface Article {
    blocks: ArticleBlock[];
}
