import { RequestObj } from '../../types.type';
import { errors$, connectionError } from './subjectsRx/errors';
import { fetchStatus$ } from './subjectsRx/fetchStatus';

const baseUrl = 'http://localhost:3000/user';

export function timeoutMock(timeout: number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve('ok'), timeout);
    });
}

export const request = async (reqObj?: RequestObj) => {
    const url = reqObj?.url ? `${baseUrl}/${reqObj.url}` : baseUrl;
    const settings = reqObj?.settings || {
        method: 'GET',
    };

    settings.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    try {
        fetchStatus$.next({ status: 'loading', id: reqObj?.id });
        await timeoutMock(500);

        const res = await fetch(url, settings);
        if (!res.ok) throw new Error(res.statusText);

        const resData = await res.json();
        if (resData.error) throw new Error(resData.error);

        fetchStatus$.next({ status: 'loaded', id: reqObj?.id });
        return resData;
    } catch (e) {
        fetchStatus$.next({ status: 'failed', id: reqObj?.id });
        errors$.next(connectionError);
        throw new Error(e as string);
    }
};
