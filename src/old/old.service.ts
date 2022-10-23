// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { ItemT } from '../types';

// const ITEMS_API = 'http://localhost:3000/base';
// @Injectable({
//     providedIn: 'root',
// })
// export class MainService {
//     title = 'todo';
//     filter: 'all' | 'active' | 'done' = 'all';
//     http!: HttpClient;
//     items: ItemT[] = [];
//     // allItems!: Observable<ItemT[]>;

//     // get items() : Observable<ItemT[]> {
//     //     return this.http.get<ItemT[]>(ITEMS_API);
//     //     // if (this.filter === 'all') {
//     //     //     return this.allItems;
//     //     // }

//     //     // return this.allItems.filter((item) => {
//     //     //     return this.filter === 'done' ? item.done : !item.done;
//     //     // });
//     // }

//     getItems() {
//         return this.http.get<ItemT[]>(ITEMS_API).subscribe((data: ItemT[]) => {
//             console.log('hyy');
//             this.items = data;
//         });
//         // if (this.filter === 'all') {
//         //     return this.allItems;
//         // }

//         // return this.allItems.filter((item) => {
//         //     return this.filter === 'done' ? item.done : !item.done;
//         // });
//     }

//     addItem(description: string) {
//         this.items.unshift({
//             description,
//             done: false,
//         });
//     }

//     remove(item: ItemT) {
//         this.items.splice(this.items.indexOf(item), 1);
//     }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { filter, map, Observable } from 'rxjs';
// import { ItemT } from '../types';

// const ITEMS_API = 'http://localhost:3000/base';
// @Injectable({
//     providedIn: 'root',
// })
// export class MainService {
//     filter: 'all' | 'active' | 'done' = 'all';
//     // items: ItemT[] = [];
//     items$!: Observable<ItemT[]>;
//     constructor(private http: HttpClient) {
//         this.getItemsNew();
//     }

//     getItems() {
//         return this.http.get<ItemT[]>(ITEMS_API);
//     }

//     async getItemsNew() {
//         this.items$ = this.http.get<ItemT[]>(ITEMS_API);
//     }

//     filterItems() {
//         if (this.filter === 'all') {
//             return this.items$;
//         }
//         // return items.filter((item) => {
//         //     return this.filter === 'done' ? item.done : !item.done;
//         // });
//     }
// }
