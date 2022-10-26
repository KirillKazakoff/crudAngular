import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';
import { UserT } from '../types.type';

@Component({
    selector: 'app-root',
    template: `
        <h1>Crud Angular</h1>
        <users [users]="this.users$ | async"></users>
    `,
})
export class AppComponent {
    constructor(private mainService: ApiService) {}
    users$!: Observable<UserT[]>;

    async ngOnInit() {
        this.users$ = await this.mainService.getUsers();
        // this.mainService.refresh();
    }
}
