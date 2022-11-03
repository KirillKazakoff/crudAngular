import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { UserNewService } from 'src/app/services/user-new.service';
import { UserT } from 'src/app/types.type';
import { FetchStatusT } from '../../types.type';

@Component({
    selector: 'users',
    template: `
        <users-loader [status]="status"></users-loader>
        <div class="users__wrapper" *ngIf="status === 'loaded'">
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
    status: FetchStatusT = 'idle';

    showForm() {
        this.userNewService.toggleActive();
    }

    async ngOnInit() {
        // (unlock to refresh users on initial value)
        // await this.apiService.refresh();

        this.apiService.usersStatus$.subscribe((value) => {
            this.status = value;
        });
        this.isActiveForm$.subscribe((value) => {
            this.isActiveForm = value;
        });
        this.users$ = await this.apiService.getUsers();
    }
}
