import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { UserT } from '../types.type';

@Component({
    selector: 'users',
    template: `
        <div class="users" novalidate>
            <users-header></users-header>
            <div class="table__body">
                <user-form
                    class="user-form"
                    [user]="user"
                    *ngFor="let user of users$ | async"
                >
                    <user-controls class="user-controls"></user-controls>
                </user-form>
                <user-form-new class="user-form--new"></user-form-new>
            </div>
        </div>
    `,
})
export class UsersComponent {
    constructor(private mainService: ApiService) {}
    users$!: Observable<UserT[]>;

    async ngOnInit() {
        this.users$ = await this.mainService.getUsers();
        // this.mainService.refresh();
    }
}
