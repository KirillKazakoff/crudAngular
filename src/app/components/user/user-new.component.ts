import { Component, OnDestroy } from '@angular/core';
import { UserNewService } from '../../services/user-new.service';

@Component({
    selector: 'user-new',
    template: `
        <user
            #userForm
            class="user-new"
            [user]="user"
            [isEdit]="true"
            [submitCb]="addUser()"
        >
            <user-new-controls
                (remove)="removeForm()"
                class="user__controls"
                [id]="user.id"
                [isLoading]="userForm.isLoading"
            ></user-new-controls>
        </user>
    `,
})
export class UserNewComponent implements OnDestroy {
    constructor(private userNewService: UserNewService) {}
    user = this.userNewService.user;

    addUser() {
        return async () => {
            await this.userNewService.addUser();
        };
    }

    removeForm() {
        this.userNewService.toggleActive();
    }

    ngOnDestroy() {
        this.userNewService.initUser();
    }
}
