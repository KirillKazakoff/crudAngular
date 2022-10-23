// import {
//     Component, EventEmitter, Input, Output,
// } from '@angular/core';
// import { Item } from '../item';

// @Component({
//     selector: 'app-item-active',
//     template: `
//         <input
//             [id]="item.description"
//             type="checkbox"
//             (change)="item.done = !item.done"
//             [checked]="item.done"
//         />
//         <label [for]="item.description">{{ item.description }}</label>

//         <div class="btn-wrapper" *ngIf="!editable">
//             <button class="btn" (click)="toggle.emit()">Edit</button>
//             <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
//         </div>
//     `,
// })

// export class ItemActive {
//     @Input() item!: Item;
//     @Input() editable!: boolean;
//     @Output() remove = new EventEmitter<Item>();
//     @Output() toggle = new EventEmitter();
// }
