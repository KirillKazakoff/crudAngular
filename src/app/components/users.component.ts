import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api/api.service';
import { UserT } from '../types.type';
import { UserNewService } from '../services/user-new.service';

@Component({
    selector: 'users',
    template: `
        <div class="users" novalidate>
            <users-header></users-header>
            <div class="table__body">
                <user-default
                    #userForm
                    class="user"
                    [user]="user"
                    *ngFor="let user of users$ | async"
                ></user-default>
                <user-new
                    #userNewForm
                    *ngIf="isActiveForm"
                    class="user-form--new"
                ></user-new>
            </div>
        </div>

        <button class="btn btn-add" *ngIf="!isActiveForm" (click)="add()">
            <img width="35px" src="assets/svg/add.svg" />
        </button>
    `,
})
export class UsersComponent {
    constructor(
        private apiService: ApiService,
        private userNewService: UserNewService,
    ) {}

    users$!: Observable<UserT[]>;
    isActiveForm$ = this.userNewService.isActive;
    isActiveForm = false;

    add() {
        this.userNewService.toggleActive();
    }

    async ngOnInit() {
        this.users$ = await this.apiService.getUsers();
        this.isActiveForm$.subscribe((value) => {
            this.isActiveForm = value;
        });
    }
}

// import { Component } from '@angular/core';
// import { Observable } from 'rxjs';
// import { ApiService } from '../services/api/api.service';
// import { UserT } from '../types.type';
// import { UserNewService } from '../services/user-new.service';

// @Component({
//     selector: 'users',
//     template: `
//         <div class="users" novalidate>
//             <users-header></users-header>
//             <div class="table__body">
//                 <user
//                     #userForm
//                     class="user"
//                     [user]="user"
//                     *ngFor="let user of users$ | async"
//                 >
//                     <user-default-controls
//                         [isEdit]="userForm.isEdit"
//                         class="user__controls"
//                     ></user-default-controls>
//                 </user>
//                 <user-new
//                     #userNewForm
//                     *ngIf="isActiveForm"
//                     class="user-form--new"
//                 ></user-new>
//             </div>
//         </div>

//         <button class="btn btn-add" *ngIf="!isActiveForm" (click)="add()">
//             <img width="35px" src="assets/svg/add.svg" />
//         </button>
//     `,
// })
// export class UsersComponent {
//     constructor(
//         private apiService: ApiService,
//         private userNewService: UserNewService,
//     ) {}

//     users$!: Observable<UserT[]>;
//     isActiveForm$ = this.userNewService.isActive;
//     isActiveForm = false;

//     add() {
//         this.userNewService.toggleActive();
//     }

//     async ngOnInit() {
//         this.users$ = await this.apiService.getUsers();
//         this.isActiveForm$.subscribe((value) => {
//             this.isActiveForm = value;
//         });
//     }
// }
