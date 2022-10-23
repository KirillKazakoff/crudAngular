import {
    Component, EventEmitter, Output,
} from '@angular/core';
import { ItemT } from '../types';

@Component({
    selector: 'item-non-active',
    template: `
        <button class="btn" (click)="toggle.emit()">Edit</button>
        <button class="btn btn-warn" (click)="remove.emit()">Delete</button>
    `,
})
export class ItemNonActive {
    @Output() remove = new EventEmitter<ItemT>();
    @Output() toggle = new EventEmitter();
}
