import { Component } from '@angular/core';
import { nanoid } from 'nanoid';
import { UserT } from '../../types.type';

@Component({
    selector: 'user-new',
    template: `
        <user class="user-new" [user]="user">
            <user-new-controls
                (save)="log()"
                class="user__controls"
            ></user-new-controls>
        </user>
    `,
})
export class UserNewComponent {
    user: UserT = {
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        age: 0,
        id: nanoid(),
    };

    isAddingUser = false;
    log() {
        console.log(this.user);
    }
}
