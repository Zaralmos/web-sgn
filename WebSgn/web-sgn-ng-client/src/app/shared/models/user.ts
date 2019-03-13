import { Department } from './department';

export interface User {
    id: number;
    email: string;
    name: string;
    phone: string;
    roles: string[];
    departmentIds: number[];
    // client-side
    departments: Department[];
}
