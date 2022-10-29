import { Component, Input, ViewChild } from '@angular/core';
import { UserT } from 'src/app/types.type';
import { UserComponent } from './user.component';
import { ApiService } from '../../services/api/api.service';

@Component({
    selector: 'user-default',
    template: `
        <user #userForm class="user" [user]="user" [isEdit]="isEdit">
            <user-default-controls
                (save)="save()"
                (edit)="edit()"
                (remove)="remove()"
                [isEdit]="isEdit"
                class="user__controls"
            ></user-default-controls>
        </user>
    `,
})
export class UserDefaultComponent {
    isEdit = false;
    @Input() user!: UserT;
    @ViewChild('userForm') userForm!: UserComponent;

    constructor(private apiService: ApiService) {}

    save() {
        this.userForm.formModel.markAllAsTouched();
        if (this.userForm.formModel.valid) {
            this.apiService.put(this.user);
            this.toggleEdit();
        }
    }

    remove() {
        this.apiService.deleteUser(this.user.id);
    }

    toggleEdit() {
        this.isEdit = !this.isEdit;
    }

    edit() {
        this.toggleEdit();
    }
}
