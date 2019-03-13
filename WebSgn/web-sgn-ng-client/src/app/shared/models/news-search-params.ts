export interface NewsSearchParams {
    queryString: string;
    exceptedIds: number[];
    tags: string[];
    anyTag: boolean;
    departmentsIds: number[];
    anyDepartment: boolean;
    orderedByDate: boolean;
    skip: number;
    take: number;
    authorsIds: number[];
}
