import { Department } from './department';

export interface Person {
    id: number;

    departmentsIds: number[];
    articleId: number;

    name: string;
    photoUrl: string;
    position: string;
    academicStatus: string;
    description: string;
    disciplines: string[];
    articleJson: string;
    email: string;
    phone: string;
    vkLink: string;

    // client-side
    departments: Department[];
}
