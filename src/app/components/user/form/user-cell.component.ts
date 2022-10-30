/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
import { Component, Input, DoCheck } from '@angular/core';
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
export class UserCellComponent implements DoCheck {
    @Input() cls!: string;
    @Input() model!: NgModel;
    @Input() value!: number | string | null;
    private _isInvalid!: boolean | null;

    msg: string = '';
    isInvalid: boolean | null = true;

    ngDoCheck() {
        if (!this.model) return;
        this.isInvalid = this.model.invalid && this.model.touched;
        if (this._isInvalid === this.isInvalid) return;
        this._isInvalid = this.isInvalid;

        const { errors } = this.model;
        for (const error in errors) {
            this.msg = messages[this.model.name][error];
        }
    }
}
