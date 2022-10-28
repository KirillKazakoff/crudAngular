import {
    Component, Output, EventEmitter, Input,
} from '@angular/core';

@Component({
    selector: 'btn-edit',
    template: `
        <button type="button" class="btn btn-edit" (click)="edit.emit()">
            <img src="assets/svg/edit.svg" width="30px" alt="button edit" />
        </button>
    `,
})
export class BtnEdit {
    @Output() edit = new EventEmitter();
}
