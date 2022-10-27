/* eslint-disable class-methods-use-this */
import { Component, Input } from '@angular/core';
import { UserT } from 'src/app/types.type';

@Component({
    selector: 'user',
    template: `
        <form #formUser="ngForm" class="user__row">
            <input
                placeholder="Write your firstname"
                [(ngModel)]="user.firstname"
                type="text"
                name="firstname"
                class="user__cell user__cell-firstname"
                (input)="this.log(user.firstname)"
            />

            <div class="user__cell user__cell-lastname">
                {{ user.lastname }}
            </div>
            <div class="user__cell user__cell-email">
                {{ user.email }}
            </div>
            <div class="user__cell user__cell-age">{{ user.age }}</div>
            <div class="user__cell user__cell-gender">
                {{ user.gender }}
            </div>
            <div class="user__cell user__cell-controls">
                <ng-content></ng-content>
            </div>
        </form>
    `,
})
export class UserComponent {
    @Input() user!: UserT;
    isEdit = false;

    log(value: string) {
        console.log(value);
    }
}
