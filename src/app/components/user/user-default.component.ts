import { Component, Input } from '@angular/core';
import { UserT } from 'src/app/types.type';
import { ApiService } from '../../services/api/api.service';

@Component({
    selector: 'user-default',
    template: `
        <user
            #userForm
            class="user"
            [user]="user"
            [isEdit]="isEdit"
            [submitCb]="submit()"
        >
            <user-default-controls
                (save)="save()"
                (edit)="edit()"
                (remove)="remove()"
                [isEdit]="isEdit"
                [isLoading]="userForm.isLoading"
                class="user__controls"
            ></user-default-controls>
        </user>
    `,
})
export class UserDefaultComponent {
    @Input() user!: UserT;
    isEdit = false;
    request: string = 'save';

    constructor(private apiService: ApiService) {}

    submit() {
        return async () => {
            if (this.request === 'save') {
                try {
                    await this.apiService.put(this.user);
                } finally {
                    this.toggleEdit();
                }
            } else {
                await this.apiService.deleteUser(this.user.id);
            }
        };
    }

    save() {
        this.request = 'save';
    }

    remove() {
        this.request = 'remove';
    }

    toggleEdit() {
        this.isEdit = !this.isEdit;
    }

    edit() {
        this.toggleEdit();
    }
}
