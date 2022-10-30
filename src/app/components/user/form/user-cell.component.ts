import { Component, Input, OnChanges } from '@angular/core';
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
export class UserCellComponent implements OnChanges {
    @Input() cls!: string;
    @Input() model!: NgModel;
    @Input() value!: number | string | null;

    msg: string = '';
    isInvalid: boolean | null = true;

    ngOnChanges() {
        this.isInvalid = this.model.invalid && this.model.touched;
        console.log(this.model.model);
        this.msg = messages[this.model.name].valueMissing;
    }
}
