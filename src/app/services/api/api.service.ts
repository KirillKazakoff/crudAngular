/* eslint-disable no-restricted-syntax */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserT } from '../../types.type';
import { initialDb } from '../../init';
import { request } from './request';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    users: UserT[] = [];
    private users$ = new BehaviorSubject<UserT[]>([]);
    constructor() {
        this.users$.subscribe((data) => { this.users = data; });
    }

    async getUsers() {
        const res = await request();
        this.users$.next(res);
        return this.users$;
    }

    async post(user: UserT) {
        request({
            settings: {
                method: 'POST',
                body: JSON.stringify(user),
            },
        });

        this.users$.next([...this.users, user]);
    }

    async deleteUser(id: string) {
        request({
            url: id,
            settings: {
                method: 'DELETE',
            },
        });

        this.users$.next([
            ...this.users.filter((user) => user.id !== id),
        ]);
    }

    async refresh() {
        for await (const user of this.users) {
            this.deleteUser(user.id);
        }

        for await (const user of initialDb) {
            this.post(user);
        }
        console.log(this.users);
    }
}
