import { Department } from './department';
import { NewsType } from './enums/news-type';

export interface NewsItem {
    id: number;

    departmentsIds: number[];
    articleId: number;

    photoUrl: string;
    title: string;
    articleJson: string;
    authorName: string;
    authorId: number;
    published: Date;
    views: number;
    isHidden: boolean;
    tags: string[];
    type: NewsType;

    // client-side
    departments: Department[];
}
