/* eslint-disable class-methods-use-this */
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserNewService } from '../../services/user-new.service';
import { UserComponent } from './user.component';

@Component({
    selector: 'user-new',
    template: `
        <user class="user-new" [user]="user" #userForm>
            <user-new-controls class="user__controls"></user-new-controls>
        </user>
        <button (click)="log(userForm.formUser)">Button</button>
    `,
})
export class UserNewComponent {
    constructor(private userNewService: UserNewService) {}
    user = this.userNewService.user;
    @ViewChild('userForm') userForm!: UserComponent;

    log(form: NgForm) {
        console.log(this.userNewService.userForm.valid);
    }

    ngAfterViewInit() {
        this.userNewService.userForm = this.userForm.formUser;
    }
}
