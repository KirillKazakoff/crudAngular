/* eslint-disable class-methods-use-this */
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserFormT, UserT, UserEmptyT } from 'src/app/types.type';

@Component({
    selector: 'user',
    template: `
        <form
            #formTemplateUser="ngForm"
            class="user__row"
            [class.user__row--active]="isEdit"
            novalidate
        >
            <user-cell class="user__cell" [model]="firstname">
                <input
                    #firstname="ngModel"
                    name="firstname"
                    [(ngModel)]="user.firstname"
                    placeholder="Write firstname"
                    required
                    [disabled]="!isEdit"
                />
            </user-cell>
            <user-cell class="user__cell" [model]="lastname">
                <input
                    #lastname="ngModel"
                    name="lastname"
                    [(ngModel)]="user.lastname"
                    placeholder="Write lastname"
                    required
                    [disabled]="!isEdit"
                />
            </user-cell>
            <user-cell class="user__cell" [model]="email">
                <input
                    #email="ngModel"
                    [(ngModel)]="user.email"
                    name="email"
                    placeholder="Insert email"
                    required
                    [disabled]="!isEdit"
                />
            </user-cell>
            <user-cell class="user__cell user__cell-age" [model]="age">
                <input
                    #age="ngModel"
                    [(ngModel)]="user.age"
                    name="age"
                    placeholder="Insert age"
                    required
                    [disabled]="!isEdit"
                    type="number"
                />
            </user-cell>
            <user-cell class="user__cell user__cell-gender" [model]="gender">
                <input
                    #gender="ngModel"
                    [(ngModel)]="user.gender"
                    name="gender"
                    placeholder="Insert gender"
                    required
                    [disabled]="!isEdit"
                />
            </user-cell>
            <div class="user__cell user__cell-controls">
                <ng-content></ng-content>
            </div>
        </form>
    `,
})
export class UserComponent {
    @ViewChild('formTemplateUser') formTemplateUser!: NgForm;
    @Input() user!: UserT | UserEmptyT;
    @Input() isEdit = true;
    formModel!: UserFormT;

    ngAfterViewInit() {
        setTimeout(() => {
            this.formModel = this.formTemplateUser.form as UserFormT;
        });
    }
}
