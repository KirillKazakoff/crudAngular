import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'btn-save',
    template: `
        <button class="btn btn-save" type="submit" (click)="save.emit()">
            <img src="assets/svg/save.svg" width="30px" alt="button save" />
        </button>
    `,
})
export class BtnSave {
    @Output() save = new EventEmitter();
}
