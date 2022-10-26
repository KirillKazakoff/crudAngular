import { Component, Input } from '@angular/core';
import { UserT } from '../types.type';

@Component({
    selector: 'user',
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
                <button type="button" class="btn btn__edit">
                    <img
                        src="assets/svg/edit.svg"
                        width="30px"
                        alt="button edit"
                    />
                </button>
                <button type="button" class="btn btn__delete">
                    <img
                        src="assets/svg/delete.svg"
                        width="35px"
                        alt="button delete"
                    />
                </button>
            </li>
        </form>
    `,
})
export class UserComponent {
    @Input() user!: UserT;
}
