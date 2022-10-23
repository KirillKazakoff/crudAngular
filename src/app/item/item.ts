import {
    Component, Input, Output, EventEmitter,
} from '@angular/core';
import { ItemT } from '../types';

@Component({
    selector: 'app-item',
    template: `
        <div class="item" [ngClass]="item.done ? 'item--done' : 'item--active'">
            <item-checkbox [item]="item"></item-checkbox>

            <div class="btn-wrapper" *ngIf="!editable">
                <item-non-active
                    (toggle)="toggleEdit()"
                    (remove)="remove.emit()"
                ></item-non-active>
            </div>
            <div *ngIf="editable">
                <item-active
                    [item]="item"
                    (toggle)="toggleEdit()"
                    (saveItem)="saveItem($event)"
                >
                </item-active>
            </div>
        </div>
    `,
})
export class ItemComponent {
    editable = false;
    @Input() item!: ItemT;
    @Output() remove = new EventEmitter<ItemT>();

    toggleEdit() {
        this.editable = !this.editable;
    }

    saveItem(value: string) {
        if (!value) return;
        this.toggleEdit();
        this.item.description = value;
    }
}
