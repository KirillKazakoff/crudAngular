import { RequestObj } from '../../types.type';
import { errors$ } from './errors';

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
        await timeoutMock(500);

        const res = await fetch(url, settings);
        if (!res.ok) throw new Error(res.statusText);

        const resData = await res.json();
        if (resData.error) throw new Error(resData.error);
        return resData;
    } catch (e: any) {
        const error = e.message as string;
        errors$.next(error);
        throw new Error(error);
    }
};
