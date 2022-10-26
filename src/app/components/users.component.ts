import { Component, Input } from '@angular/core';
import { UserT } from '../types.type';

@Component({
    selector: 'users',
    template: `
        <div class="table">
            <div class="table__header">
                <li class="table__head table__head-firstname">First name</li>
                <li class="table__head table__head-lastname">Last name</li>
                <li class="table__head table__head-email">Email</li>
                <li class="table__head table__head-age">Age</li>
                <li class="table__head table__head-gender">Gender</li>
                <li class="table__head table__head-controls">Controls</li>
            </div>
            <div class="table__body">
                <ul class="table__row" *ngFor="let user of users">
                    <li class="table__cell table__cell-firstname">
                        {{ user.firstname }}
                    </li>
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
                        <img
                            class="svg svg-edit"
                            src="assets/svg/edit.svg"
                            width="30px"
                        />
                        <img
                            class="svg svg-delete"
                            src="assets/svg/delete.svg"
                            width="35px"
                        />
                    </li>
                </ul>
            </div>
        </div>
    `,
})
export class TableComponent {
    @Input() users?: UserT[] | null;
}
