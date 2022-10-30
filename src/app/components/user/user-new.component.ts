/* eslint-disable class-methods-use-this */
import {
    AfterViewInit, Component, OnDestroy, ViewChild,
} from '@angular/core';
import { UserNewService } from '../../services/user-new.service';
import { UserComponent } from './user.component';

@Component({
    selector: 'user-new',
    template: `
        <user
            #userForm
            class="user-new"
            [user]="user"
            [isEdit]="true"
            (submitCb)="addUser()"
        >
            <user-new-controls
                (remove)="removeForm()"
                class="user__controls"
            ></user-new-controls>
        </user>
    `,
})
export class UserNewComponent implements AfterViewInit, OnDestroy {
    constructor(private userNewService: UserNewService) {}
    user = this.userNewService.user;
    @ViewChild('userForm') userForm!: UserComponent;

    addUser() {
        this.userNewService.addUser();
    }

    removeForm() {
        this.userNewService.toggleActive();
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.userNewService.userForm = this.userForm.formModel;
        });
    }

    ngOnDestroy() {
        this.userNewService.initUser();
    }
}
