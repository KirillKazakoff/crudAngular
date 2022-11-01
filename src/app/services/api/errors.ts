import { BehaviorSubject } from 'rxjs';
import { InfoT } from 'src/app/types.type';

export const errors$ = new BehaviorSubject<InfoT>(null);
export const connectionError = {
    title: 'Connection error!',
    desc: 'Check your internet connection...',
};
