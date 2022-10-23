import {
    Component, EventEmitter, Output,
} from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
    selector: 'app-filtration',
    template: `
        <div>insert a filter here</div>
        <input
            class="input filter-input"
            [(ngModel)]="filter"
            (input)="filterItems.emit(filter)"
        />
        <button (click)="clear()"></button>
    `,
})
export class FiltrationComponent {
    constructor(private mainService: MainService) {}

    filter: 'all' | 'active' | 'done' = 'all';

    @Output() filterItems = new EventEmitter<string>();

    clear() {
        this.mainService.items = [];
    }
}
