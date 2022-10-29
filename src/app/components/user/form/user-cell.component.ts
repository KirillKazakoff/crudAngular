import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { messages } from '../../../services/messages';

@Component({
    selector: 'user-cell',
    template: `
        <div [class.is-invalid]="isInvalid">
            <div [hidden]="!isInvalid" [class.input-tip]="isInvalid">
                {{ msg }}
            </div>
            <ng-content></ng-content>
        </div>
    `,
})
export class UserCellComponent {
    @Input() cls!: string;
    @Input() model!: NgModel;
    msg: string = '';
    isInvalid: boolean | null = true;

    ngDoCheck() {
        this.isInvalid = this.model.invalid && this.model.touched;
        this.msg = messages[this.model.name].valueMissing;
    }
}
