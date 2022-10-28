/* eslint-disable class-methods-use-this */
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserFormT, UserT, UserEmptyT } from 'src/app/types.type';

@Component({
    selector: 'user',
    template: `
        <form #formTemplateUser="ngForm" class="user__row" novalidate>
            <div
                class="input-wrapper user__cell user__cell-firstname"
                [class.is-invalid]="firstname.invalid"
            >
                <input
                    #firstname="ngModel"
                    name="firstname"
                    [(ngModel)]="user.firstname"
                    placeholder="Write firstname"
                    required
                />
            </div>
            <div
                class="input-wrapper user__cell user__cell-lastname"
                [class.is-invalid]="lastname.invalid"
            >
                <input
                    #lastname="ngModel"
                    name="lastname"
                    [(ngModel)]="user.lastname"
                    placeholder="Write lastname"
                    required
                />
            </div>

            <div
                class="input-wrapper user__cell user__cell-email"
                [class.is-invalid]="email.invalid"
            >
                <input
                    #email="ngModel"
                    [(ngModel)]="user.email"
                    name="email"
                    placeholder="Insert email"
                    required
                />
            </div>

            <div
                class="input-wrapper user__cell user__cell-email"
                [class.is-invalid]="age.invalid"
            >
                <input
                    #age="ngModel"
                    [(ngModel)]="user.age"
                    name="age"
                    placeholder="Insert age"
                    required
                    pattern="[1-9]\\d*"
                    type="number"
                />
            </div>
            <div
                class="input-wrapper user__cell user__cell-email"
                [class.is-invalid]="gender.invalid"
            >
                <input
                    #gender="ngModel"
                    [(ngModel)]="user.gender"
                    name="gender"
                    placeholder="Insert gender"
                    required
                />
            </div>
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
