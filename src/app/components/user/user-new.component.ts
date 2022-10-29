/* eslint-disable class-methods-use-this */
import { Component, ViewChild } from '@angular/core';
import { UserNewService } from '../../services/user-new.service';
import { UserComponent } from './user.component';

@Component({
    selector: 'user-new',
    template: `
        <user #userForm class="user-new" [user]="user" [isEdit]="true">
            <user-new-controls class="user__controls"></user-new-controls>
        </user>
    `,
})
export class UserNewComponent {
    constructor(private userNewService: UserNewService) {}
    user = this.userNewService.user;
    @ViewChild('userForm') userForm!: UserComponent;

    log() {
        console.log(this.userForm.formModel);
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.userNewService.userForm = this.userForm.formModel;
        });
    }
}
