import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api/api.service';
import { UserT } from '../types.type';
import { UserNewService } from '../services/user-new.service';

@Component({
    selector: 'users',
    template: `
        <div class="users-wrapper">
            <div class="users" novalidate>
                <users-header></users-header>
                <div class="table__body">
                    <user-default
                        #userForm
                        class="user"
                        [user]="user"
                        *ngFor="let user of users$ | async"
                    ></user-default>
                    <user-new #userNewForm *ngIf="isActiveForm"></user-new>
                </div>
            </div>
            <button
                class="btn btn-add"
                *ngIf="!isActiveForm"
                (click)="showForm()"
            >
                <img width="40px" src="assets/svg/add.svg" />
            </button>
        </div>
    `,
})
export class UsersComponent implements OnInit {
    constructor(
        private apiService: ApiService,
        private userNewService: UserNewService,
    ) {}

    users$!: Observable<UserT[]>;
    isActiveForm$ = this.userNewService.isActive;
    isActiveForm = false;

    showForm() {
        this.userNewService.toggleActive();
    }

    async ngOnInit() {
        this.users$ = await this.apiService.getUsers();
        this.isActiveForm$.subscribe((value) => {
            this.isActiveForm = value;
        });
    }
}
