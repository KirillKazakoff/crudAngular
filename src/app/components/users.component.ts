import { Component, Input } from '@angular/core';
import { UserT } from '../types.type';

@Component({
    selector: 'users',
    template: `
        <div class="table">
            <div class="table__header">
                <li class="table__head">First name</li>
                <li class="table__head">Last name</li>
                <li class="table__head">Email</li>
                <li class="table__head">Age</li>
                <li class="table__head">Gender</li>
            </div>
            <div class="table__body" *ngFor="let user of users">
                <ul class="table__row">
                    <li class="table__cell">{{ user.firstname }}</li>
                    <li class="table__cell">{{ user.lastname }}</li>
                    <li class="table__cell">
                        {{ user.email }}
                    </li>
                    <li class="table__cell">{{ user.age }}</li>
                    <li class="table__cell">{{ user.gender }}</li>
                </ul>
            </div>
        </div>
    `,
})
export class TableComponent {
    @Input() users?: UserT[] | null;
}
