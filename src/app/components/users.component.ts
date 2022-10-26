import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { UserT } from '../types.type';

@Component({
    selector: 'users',
    template: `
        <div class="table" novalidate>
            <table-header></table-header>
            <div class="table__body">
                <user-form
                    [user]="user"
                    *ngFor="let user of users$ | async"
                ></user-form>
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
