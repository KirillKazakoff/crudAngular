import { Component, Input, ViewChild } from '@angular/core';
import { UserEmptyT, UserT } from 'src/app/types.type';
import { UserComponent } from './user.component';

@Component({
    selector: 'user-default',
    template: `
        <user #userForm class="user" [user]="user">
            <user-default-controls
                [isEdit]="isEdit"
                class="user__controls"
            ></user-default-controls>
        </user>
        <!-- <button (click)="click(userForm.formUser)">hey</button> -->
    `,
})
export class UserDefaultComponent {
    isEdit = false;
    @Input() user!: UserT | UserEmptyT;
    @ViewChild('userForm') userForm!: UserComponent;

    click(form: any) {
        console.log(this.user);
    }
}
