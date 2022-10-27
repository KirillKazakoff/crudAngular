import { Component } from '@angular/core';
import { UserNewService } from '../../services/user-new.service';

@Component({
    selector: 'user-new-controls',
    template: `
        <button class="btn btn-save" type="submit" (click)="save()">
            <img src="assets/svg/save.svg" width="30px" alt="button save" />
        </button>
        <button type="button" class="btn btn-delete" (click)="remove()">
            <img src="assets/svg/delete.svg" width="35px" alt="button delete" />
        </button>
    `,
})
export class UserNewControlsComponent {
    constructor(private userNewService: UserNewService) {}

    save() {
        this.userNewService.addUser();
    }

    remove() {
        this.userNewService.toggleActive();
    }
}
