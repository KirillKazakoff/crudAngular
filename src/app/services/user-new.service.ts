import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';
import { BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { UserEmptyT, UserT } from '../types.type';
import { ApiService } from './api/api.service';

@Injectable({
    providedIn: 'root',
})
export class UserNewService {
    constructor(private apiService: ApiService) {}
    userForm!: NgForm;
    user: UserEmptyT = {
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        age: '',
        id: nanoid(),
    };
    private isActive$ = new BehaviorSubject<boolean>(false);

    toUser() {
        this.user.age = +this.user.age;
        return this.user as UserT;
    }

    addUser() {
        const user = this.toUser();
        this.apiService.post(user);
        this.toggleActive();
    }

    toggleActive() {
        this.isActive$.next(!this.isActive$.getValue());
    }

    get isActive() {
        return this.isActive$;
    }
}
