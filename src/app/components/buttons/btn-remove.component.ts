import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'btn-remove',
    template: `
        <button type="button" class="btn btn-delete" (click)="remove.emit()">
            <img src="assets/svg/delete.svg" width="35px" alt="button delete" />
        </button>
    `,
})
export class BtnRemoveComponent {
    @Output() remove = new EventEmitter();
}
