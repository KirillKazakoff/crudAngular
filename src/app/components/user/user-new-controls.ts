import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'user-new-controls',
    template: `
        <button class="btn btn-save" type="button">
            <img
                src="assets/svg/save.svg"
                width="30px"
                alt="button save"
                (click)="save.emit()"
            />
        </button>
        <button type="button" class="btn btn-delete" (click)="delete.emit()">
            <img src="assets/svg/delete.svg" width="35px" alt="button delete" />
        </button>
    `,
})
export class UserNewControlsComponent {
    @Output() save = new EventEmitter();
    @Output() delete = new EventEmitter();
}
