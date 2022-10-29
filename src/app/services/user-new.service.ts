import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { BehaviorSubject } from 'rxjs';
import { UserEmptyT, UserT, UserFormT } from '../types.type';
import { ApiService } from './api/api.service';

@Injectable({
    providedIn: 'root',
})
export class UserNewService {
    constructor(private apiService: ApiService) {
        this.initUser();
    }
    userForm!: UserFormT;
    user!: UserEmptyT;
    private isActive$ = new BehaviorSubject<boolean>(false);

    initUser() {
        this.user = {
            firstname: '',
            lastname: '',
            email: '',
            gender: '',
            age: '',
            id: nanoid(),
        };
    }

    toUser() {
        this.user.age = +this.user.age;
        return this.user as UserT;
    }

    addUser() {
        this.userForm.markAllAsTouched();
        if (this.userForm.valid) {
            const user = this.toUser();
            this.apiService.post(user);
            this.toggleActive();
            this.initUser();
        }
    }

    toggleActive() {
        this.isActive$.next(!this.isActive$.getValue());
    }

    get isActive() {
        return this.isActive$;
    }
}
