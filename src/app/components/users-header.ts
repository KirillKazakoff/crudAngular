import { Component } from '@angular/core';

@Component({
    selector: 'users-header',
    template: `
        <div class="users__header">
            <li class="users__head users__head-firstname">First name</li>
            <li class="users__head users__head-lastname">Last name</li>
            <li class="users__head users__head-email">Email</li>
            <li class="users__head users__head-age">Age</li>
            <li class="users__head users__head-gender">Gender</li>
            <li class="users__head users__head-controls">Controls</li>
        </div>
    `,
})
export class UsersHeader {}
