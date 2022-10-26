import { Component } from '@angular/core';

@Component({
    selector: 'user-form-controls',
    template: `
        <button type="button" class="btn btn__edit">
            <img src="assets/svg/edit.svg" width="30px" alt="button edit" />
        </button>
        <button type="button" class="btn btn__delete">
            <img src="assets/svg/delete.svg" width="35px" alt="button delete" />
        </button>
    `,
    styles: [
        `
            :host {
                display: flex;
                justify-content: space-between;
            }
        `,
    ],
})
export class UserFormControls {}
