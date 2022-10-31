import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { UserNewService } from 'src/app/services/user-new.service';
import { UserT } from 'src/app/types.type';

@Component({
    selector: 'users',
    template: `
        <ng-template #loader>
            <users-loader></users-loader>
        </ng-template>
        <div class="users__wrapper" *ngIf="!isUsersLoading; else loader">
            <div class="users">
                <users-header></users-header>
                <user-default
                    class="user"
                    [user]="user"
                    *ngFor="let user of users$ | async"
                ></user-default>
                <user-new *ngIf="isActiveForm"></user-new>
            </div>

            <btn-show
                class="btn btn-show"
                [isActiveForm]="isActiveForm"
                (showForm)="showForm()"
            ></btn-show>
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
    isUsersLoading = true;

    showForm() {
        this.userNewService.toggleActive();
    }

    async ngOnInit() {
        // await this.apiService.refresh(); (unlock to refresh users on initial value)
        this.users$ = await this.apiService.getUsers();
        this.isUsersLoading = false;
        this.isActiveForm$.subscribe((value) => {
            this.isActiveForm = value;
        });
    }
}
