/* eslint-disable class-methods-use-this */
import { Component, Input } from '@angular/core';
import { UserT } from 'src/app/types.type';

@Component({
    selector: 'user-form',
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
                <user-controls class="user-controls"></user-controls>
            </div>
        </form>
    `,
})
export class UserFormComponent {
    @Input() user!: UserT;

    log(value: string) {
        console.log(value);
    }
}
