/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FetchStatusT, UserT } from '../../types.type';
import { initialDb } from '../../init';
import { request } from './request';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    users: UserT[] = [];
    private users$ = new BehaviorSubject<UserT[]>([]);
    private _usersStatus$ = new BehaviorSubject<FetchStatusT>('idle');

    constructor() {
        this.users$.subscribe((data) => {
            this.users = data;
        });
    }

    get usersStatus$() {
        return this._usersStatus$.asObservable();
    }

    async getUsers() {
        try {
            this._usersStatus$.next('loading');
            const res = await request();

            this.users$.next(res);
            this._usersStatus$.next('loaded');
        } catch (e) {
            this._usersStatus$.next('failed');
        }
        return this.users$.asObservable();
    }

    async post(user: UserT) {
        await request({
            settings: {
                method: 'POST',
                body: JSON.stringify(user),
            },
            id: user.id,
        });

        this.users$.next([...this.users, user]);
    }

    async put(user: UserT) {
        await request({
            url: user.id,
            settings: {
                method: 'PUT',
                body: JSON.stringify(user),
            },
            id: user.id,
        });
        const replacedIndex = this.users.indexOf(user);
        this.users.splice(replacedIndex, 1);
        this.users.splice(replacedIndex, 0, user);
        this.users$.next(this.users);
    }

    async deleteUser(id: string) {
        await request({
            url: id,
            settings: {
                method: 'DELETE',
            },
            id,
        });

        this.users$.next(this.users.filter((user) => user.id !== id));
    }

    async refresh() {
        await this.getUsers();
        for await (const user of this.users) {
            this.deleteUser(user.id);
        }

        for await (const user of initialDb) {
            this.post(user);
        }
    }
}
