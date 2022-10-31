import { Component, Input } from '@angular/core';

@Component({
    selector: 'users-loader',
    template: ` <div *ngIf="isLoading" class="loader">loading...</div> `,
})
export class UsersLoaderComponent {
    @Input() isLoading = true;
}
