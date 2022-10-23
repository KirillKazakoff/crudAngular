import {
    Component, EventEmitter, Input, Output,
} from '@angular/core';
import { ItemT } from '../types';

@Component({
    selector: 'item-active',
    template: ` <input
            #input
            class="sm-text-input"
            placeholder="edit item"
            [value]="item.description"
            (keyup.enter)="saveItem.emit('')"
        />

        <div class="btn-wrapper">
            <button class="btn" (click)="toggle.emit()">Cancel</button>
            <button class="btn btn-save" (click)="onSave(input.value)">
                Save
            </button>
        </div>`,
})
export class ItemActive {
    @Input() item!: ItemT;
    @Output() toggle = new EventEmitter();
    @Output() saveItem = new EventEmitter<string>();
    // saveItem: EventEmitter<string> = new EventEmitter();

    onSave(value: string) {
        this.saveItem.emit(value);
    }
}
