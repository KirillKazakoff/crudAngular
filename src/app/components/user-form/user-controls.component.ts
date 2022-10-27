import { Component, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'user-controls',
    template: `
        <ng-template #defaultControls>
            <button type="button" class="btn btn__edit">
                <img src="assets/svg/edit.svg" width="30px" alt="button edit" />
            </button>
            <button type="button" class="btn btn__delete">
                <img
                    src="assets/svg/delete.svg"
                    width="35px"
                    alt="button delete"
                />
            </button>
        </ng-template>

        <ng-container
            *ngIf="
                controlsTemplate;
                then controlsTemplate;
                else defaultControls
            "
        ></ng-container>
    `,
})
export class ControlsComponent {
    @Input() controlsTemplate!: TemplateRef<any>;
}
