/* eslint-disable class-methods-use-this */
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserT } from 'src/app/types.type';
import { UserEmptyT } from '../../types.type';

@Component({
    selector: 'user',
    template: `
        <form #formUser="ngForm" class="user__row" novalidate>
            <input
                [(ngModel)]="user.firstname"
                name="firstname"
                class="user__cell user__cell-firstname"
                placeholder="Write firstname"
                required
            />
            <input
                [(ngModel)]="user.lastname"
                name="lastname"
                class="user__cell user__cell-lastname"
                placeholder="Write lastname"
            />
            <input
                [(ngModel)]="user.email"
                name="email"
                class="user__cell user__cell-email"
                placeholder="Insert email"
            />
            <input
                [(ngModel)]="user.age"
                name="age"
                class="user__cell user__cell-age"
                placeholder="Insert age"
                type="number"
            />
            <input
                [(ngModel)]="user.gender"
                name="gender"
                class="user__cell user__cell-gender"
                placeholder="Insert gender"
            />
            <div class="user__cell user__cell-controls">
                <ng-content></ng-content>
            </div>
        </form>
    `,
})
export class UserComponent {
    @ViewChild('formUser') formUser!: NgForm;
    @Input() user!: UserT | UserEmptyT;
    isEdit = false;

    log(value: string) {
        console.log(this.user);
    }
}
