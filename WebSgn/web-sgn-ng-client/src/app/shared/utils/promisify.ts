import { Observable } from 'rxjs';
import { last, map } from 'rxjs/operators';

export function promisify<T>(observable: Observable<T>) {
    return observable.pipe(last(), map(value => {
        return value;
    })).toPromise();
}
