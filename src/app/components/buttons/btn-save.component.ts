import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'btn-save',
    template: `
        <button type="submit" class="btn btn-save" (click)="save.emit()">
            <img src="assets/svg/save.svg" width="30px" alt="button save" />
        </button>
    `,
})
export class BtnSaveComponent {
    @Output() save = new EventEmitter();
}
