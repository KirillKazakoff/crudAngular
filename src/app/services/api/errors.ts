import { BehaviorSubject, map } from 'rxjs';
import { InfoT } from '../../types.type';

export const errors$ = new BehaviorSubject<string>('');

type ErrorsT = { [key: string]: InfoT };

export const errors: ErrorsT = {
    'Failed to fetch': {
        title: 'Connection error!',
        desc: 'Check your internet connection...',
    },
    'Not Found': {
        title: 'Not found',
        desc: "Can't find this user, please refresh your page",
    },
};

export const errorObs$ = errors$.pipe(map((errorMsg) => errors[errorMsg]));

// export const getError = (message: string) => {
//     return errors[message];
// };
