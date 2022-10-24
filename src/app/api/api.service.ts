/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { UserIdT, UserT } from '../types.type';
import { initialDb } from '../init';
import { request } from './request';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}
    private users$ = new BehaviorSubject<UserIdT[]>([]);

    async getUsers() {
        const res = await request();
        this.users$.next(res);
        console.log(res);
        return this.users$;
    }

    async post(user: UserT) {
        await request({
            settings: {
                method: 'POST',
                body: JSON.stringify(user),
            },
        });
    }

    async deleteUser(id: string) {
        await request({
            url: id,
            settings: {
                method: 'DELETE',
            },
        });
    }

    async refresh() {
        const users = this.users$.getValue();
        if (users.length > 0) {
            users.forEach((user) => {
                this.deleteUser(user._id);
            });
        }

        for await (const user of initialDb) {
            this.post(user);
        }
        this.getUsers();
    }
}
