import { Component, Input } from '@angular/core';
import { UserT } from '../types.type';

@Component({
    selector: 'user-form',
    template: `
        <form #formTable="ngForm" class="table__row">
            <input
                [(ngModel)]="user.firstname"
                type="text"
                name="firstname"
                class="table__cell table__cell-firstname"
            />

            <li class="table__cell table__cell-lastname">
                {{ user.lastname }}
            </li>
            <li class="table__cell table__cell-email">
                {{ user.email }}
            </li>
            <li class="table__cell table__cell-age">{{ user.age }}</li>
            <li class="table__cell table__cell-gender">
                {{ user.gender }}
            </li>
            <li class="table__cell table__cell-controls">
                <user-form-controls></user-form-controls>
            </li>
        </form>
    `,
    styles: [
        ':host { border-bottom: 1px solid black; display: block}',
        ':host:last-child {border: none}',
    ],
})
export class UserFormComponent {
    @Input() user!: UserT;
}
