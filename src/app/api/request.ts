import { RequestObj } from '../types.type';

// const baseUrlProd = 'https://crudcrud.com/api/2a35fafcedc4484797d80c30d94793e1/user';
const baseUrlDev = 'http://localhost:3000/user';
const baseUrl = baseUrlDev;

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
        const res = await fetch(url, settings);
        if (!res.ok) throw new Error(res.statusText);

        const resData = await res.json();
        if (resData.error) throw new Error(resData.error);
        return resData;
    } catch (e) {
        console.log(`the error is ${e}`);
        throw new Error(e as string);
    }
};
