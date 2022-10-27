import { Component, Input } from '@angular/core';

@Component({
    selector: 'user-default-controls',
    template: `
        <button type="button" class="btn btn-edit">
            <img src="assets/svg/edit.svg" width="30px" alt="button edit" />
        </button>
        <button type="button" class="btn btn-delete">
            <img src="assets/svg/delete.svg" width="35px" alt="button delete" />
        </button>
    `,
})
export class UserDefaultControlsComponent {
    @Input() isEdit = false;
}
