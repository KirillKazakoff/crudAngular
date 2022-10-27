import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api/api.service';
import { UserT } from '../types.type';

@Component({
    selector: 'users',
    template: `
        <div class="users" novalidate>
            <users-header></users-header>
            <div class="table__body" #tbody>
                <user
                    #userForm
                    class="user"
                    [user]="user"
                    *ngFor="let user of users$ | async"
                >
                    <user-controls
                        [isEdit]="userForm.isEdit"
                        class="user__controls"
                    ></user-controls>
                </user>
                <user-new
                    #userNewForm
                    *ngIf="isAddingUser"
                    class="user-form--new"
                ></user-new>
            </div>
        </div>

        <button class="btn btn-add" *ngIf="!isAddingUser" (click)="add()">
            <img width="35px" src="assets/svg/add.svg" />
        </button>
    `,
})
export class UsersComponent {
    constructor(private mainService: ApiService) {}
    users$!: Observable<UserT[]>;
    isAddingUser = false;

    add() {
        this.isAddingUser = true;
    }

    async ngOnInit() {
        this.users$ = await this.mainService.getUsers();
    }
}
