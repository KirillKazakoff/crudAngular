/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemT } from '../types';

const ITEMS_API = 'http://localhost:3000/base';
@Injectable({
    providedIn: 'root',
})
export class MainService {
    items: ItemT[] = [];

    constructor(private http: HttpClient) {}

    async getItems() {
        const json = await fetch(ITEMS_API);
        this.items = await json.json();

        return this.items;
    }

    filterItems(filter: string) {
        if (filter === 'all') {
            return this.items;
        }
        return this.items.filter((item) => {
            return filter === 'done' ? item.done : !item.done;
        });
    }
}
