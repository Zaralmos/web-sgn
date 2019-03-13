export function remove<T>(array: T[], element: T): void {
    while (array.includes(element)) {
        array.splice(array.findIndex(e => e === element), 1);
    }
}
