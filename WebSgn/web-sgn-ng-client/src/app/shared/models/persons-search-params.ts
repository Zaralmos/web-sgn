export interface PersonsSearchParams {
    queryString: string;
    exceptedids: number[];
    departmentsIds: number[];
    anyDepartment: boolean;
}