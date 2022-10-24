import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { initialDb } from './init';

@Component({
    selector: 'app-root',
    template: `
        <div>Hello everybody</div>
    `,
})

export class AppComponent {
    constructor(private mainService: ApiService) {}

    async ngOnInit() {
        await this.mainService.getUsers();
        this.mainService.refresh();
    }
}
