import { Component } from '@angular/core';
import { nanoid } from 'nanoid';
import { UserT } from '../../types.type';

@Component({
    selector: 'user-form-new',
    template: ` <user-form class="user-form" [user]="user"></user-form> `,
})
export class UserFormNewComponent {
    user: UserT = {
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        age: 0,
        id: nanoid(),
    };
}
