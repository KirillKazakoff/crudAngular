// import {
//     Component, EventEmitter, Input, Output,
// } from '@angular/core';
// import { ItemT } from 'src/app/types';

// @Component({
//     selector: 'item-active-c',
//     template: ` <input
//             #input
//             class="sm-text-input"
//             placeholder="edit item"
//             [(ngModel)]="item.description"
//             (keyup.enter)="saveItem.emit()"
//         />

//         <div class="btn-wrapper">
//             <button class="btn" (click)="toggle.emit()">Cancel</button>
//             <button class="btn btn-save" (click)="saveItem.emit()">
//                 Save
//             </button>
//         </div>`,
// })

// export class ItemActive {
//     @Input() item!: ItemT;
//     @Output() toggle = new EventEmitter();
//     @Output() saveItem = new EventEmitter<string>();
//     // saveItem(description: string) {
//     //     if (!description) return;
//     //     this.toggle.emit();
//     //     this.item.description = description;
//     // }
// }
