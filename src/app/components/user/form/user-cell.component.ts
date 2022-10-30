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

    ngOnInit() {
        this._isInvalid = true;
    }

    ngDoCheck() {
        this.isInvalid = this.model.invalid && this.model.touched;
        if (this._isInvalid === this.isInvalid) return;
        this._isInvalid = this.isInvalid;

        console.log('hey');
        this.msg = messages[this.model.name].valueMissing;
    }
}
