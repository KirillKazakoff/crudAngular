// import { Component, OnInit } from '@angular/core';
// import { ItemT } from './types';
// import { MainService } from './services/main.service';

// @Component({
//     selector: 'app-root',
//     template: `
//         <ng-template #empty>waiting for data...</ng-template>
//         <ng-template #loaded>
//             <app-header (filterItems)="filterItems($event)" [length]="items.length"></app-header>
//             <ul>
//                 <li *ngFor="let item of items">
//                     <app-item (remove)="remove(item)" [item]="item"></app-item>
//                 </li>
//             </ul>
//         </ng-template>

//         <ng-container
//             *ngIf="items.length > 0; then loaded; else empty"
//         ></ng-container>
//     `,
// })
// export class AppComponent {
//     items: ItemT[] = this.mainService.items;

//     constructor(private mainService: MainService) {}

//     addItem(description: string) {
//         this.items.unshift({
//             description,
//             done: false,
//         });
//     }

//     remove(item: ItemT) {
//         this.items.splice(this.items.indexOf(item), 1);
//         console.log(this.mainService.items);
//     }

//     filterItems(filter: string) {
//         this.items = this.mainService.filterItems(filter);
//     }

//     ngOnInit(): void {
//         this.mainService.getItems().subscribe((data) => {
//             this.items = data;
//             this.mainService.items = this.items;
//         });
//     }
// }
