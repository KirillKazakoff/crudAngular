import { Component, Input } from '@angular/core';
import { ItemT } from '../types';

@Component({
    selector: 'item-checkbox',
    template: `
        <input
            [id]="item.description"
            type="checkbox"
            (change)="item.done = !item.done"
            [checked]="item.done"
        />
        <label [for]="item.description">{{ item.description }}</label>
    `,
})

export class ItemCheckbox {
    @Input() item!: ItemT;
}
