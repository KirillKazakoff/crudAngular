import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { UserNewService } from 'src/app/services/user-new.service';
import { UserT } from 'src/app/types.type';

@Component({
    selector: 'users',
    template: `
        <div class="users__wrapper">
            <div class="users">
                <users-header></users-header>
                <user-default
                    #userForm
                    class="user"
                    [user]="user"
                    *ngFor="let user of users$ | async"
                ></user-default>
                <user-new #userNewForm *ngIf="isActiveForm"></user-new>
            </div>
            <button
                class="btn btn-show"
                [class.btn-show--hidden]="isActiveForm"
                (click)="showForm()"
            >
                <img width="45px" src="assets/svg/add.svg" />
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
