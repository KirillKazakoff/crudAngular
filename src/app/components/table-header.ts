import { Component } from '@angular/core';

@Component({
    selector: 'table-header',
    template: `
        <div class="table__header">
            <li class="table__head table__head-firstname">First name</li>
            <li class="table__head table__head-lastname">Last name</li>
            <li class="table__head table__head-email">Email</li>
            <li class="table__head table__head-age">Age</li>
            <li class="table__head table__head-gender">Gender</li>
            <li class="table__head table__head-controls">Controls</li>
        </div>
    `,
})
export class TableHeader {}
