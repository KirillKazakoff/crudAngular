import { Component, Input } from '@angular/core';
import { FetchStatusT } from '../../types.type';

@Component({
    selector: 'users-loader',
    template: `
        <div class="loader" *ngIf="status === 'loading'">{{ message }}</div>
    `,
})
export class UsersLoaderComponent {
    @Input() status: FetchStatusT = 'idle';
    public message = 'loading users...';

    ngOnChanges() {
        if (this.status === 'failed') {
            this.message = 'failed to load';
            return;
        }
        this.message = 'loading users...';
    }
}
