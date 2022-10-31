import { BehaviorSubject } from 'rxjs';
import { FetchStatusT } from 'src/app/types.type';

export const fetchStatus$ = new BehaviorSubject<FetchStatusT>({
    status: 'idle',
});
