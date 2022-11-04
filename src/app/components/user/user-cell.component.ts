/* eslint-disable no-underscore-dangle */
import { Component, Input, DoCheck } from '@angular/core';
import { NgModel } from '@angular/forms';
import { validationMessages } from './utils/validationMessages';

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
export class UserCellComponent implements DoCheck {
    @Input() cls!: string;
    @Input() model!: NgModel;
    @Input() value!: number | string | null;
    msg: string = '';
    isInvalid: boolean | null = true;
    isActive = false;
    // private _isInvalid!: boolean | null;

    ngDoCheck() {
        this.isInvalid = this.model.invalid && this.model.touched;
        // code that tried to prevent extra processing
        // if (this._isInvalid === this.isInvalid) return;
        // this._isInvalid = this.isInvalid;

        const { errors } = this.model;
        if (!errors) return;
        Object.keys(errors).forEach((error) => {
            this.msg = validationMessages[this.model.name][error];
        });
    }
}
