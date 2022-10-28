import { Component } from '@angular/core';
import { UserNewService } from '../../services/user-new.service';

@Component({
    selector: 'user-new-controls',
    template: `
        <btn-save (save)="save()"></btn-save>
        <btn-remove (remove)="remove()"></btn-remove>
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
