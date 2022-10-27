import { Component, Input } from '@angular/core';

@Component({
    selector: 'user-controls',
    template: `
        <ng-template #editBtn>
            <button type="button" class="btn btn-edit">
                <img src="assets/svg/edit.svg" width="30px" alt="button edit" />
            </button>
        </ng-template>

        <ng-template #saveBtn>
            <button class="btn btn-save" type="button">
                <img src="assets/svg/save.svg" width="30px" alt="button save" />
            </button>
        </ng-template>

        <ng-container *ngIf="isEdit; then saveBtn; else editBtn"></ng-container>
        <button type="button" class="btn btn-delete">
            <img src="assets/svg/delete.svg" width="35px" alt="button delete" />
        </button>
    `,
})
export class UserControlsComponent {
    @Input() isEdit = false;
}
