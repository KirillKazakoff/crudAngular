import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'input-wrapper',
    template: `
        <div
            class="input-wrapper user__cell user__cell-firstname {{ cls }}"
            [class.is-invalid]="model.invalid"
        >
            <ng-content></ng-content>
        </div>
    `,
})
export class InputWrapper {
    @Input() model!: NgModel;
    @Input() cls: string = '';
}
