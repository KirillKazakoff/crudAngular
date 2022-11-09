import {
    Component,
    ElementRef,
    Input,
    OnChanges,
    ViewChild,
    OnInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserT, UserEmptyT } from 'src/app/types.type';
import { emailPattern } from './utils/emailPattern';

@Component({
    selector: 'user',
    template: `
        <form
            #formUser="ngForm"
            class="user__row"
            [class.user__row--active]="isEdit"
            novalidate
            (ngSubmit)="onSubmit()"
        >
            <user-cell class="user__cell" [model]="firstname">
                <input
                    #firstRef
                    #firstname="ngModel"
                    name="firstname"
                    [(ngModel)]="user.firstname"
                    placeholder="Write firstname"
                    required
                    [disabled]="!isEdit"
                />
            </user-cell>
            <user-cell class="user__cell" [model]="lastname">
                <input
                    #lastname="ngModel"
                    name="lastname"
                    [(ngModel)]="user.lastname"
                    placeholder="Write lastname"
                    required
                    [disabled]="!isEdit"
                />
            </user-cell>
            <user-cell class="user__cell" [model]="email">
                <input
                    #email="ngModel"
                    [(ngModel)]="user.email"
                    name="email"
                    placeholder="Insert email"
                    required
                    [disabled]="!isEdit"
                    [pattern]="emailPattern"
                />
            </user-cell>
            <user-cell class="user__cell user__cell-age" [model]="age">
                <input
                    appAgeValidator
                    #age="ngModel"
                    [(ngModel)]="user.age"
                    name="age"
                    placeholder="Insert age"
                    required
                    [disabled]="!isEdit"
                    type="number"
                />
            </user-cell>

            <user-cell class="user__cell user__cell-gender" [model]="gender">
                <label>
                    <input
                        #gender="ngModel"
                        required
                        type="radio"
                        [(ngModel)]="user.gender"
                        name="gender"
                        class="form-check-input"
                        value="male"
                        [disabled]="!isEdit"
                    />
                    Male
                </label>
                <label>
                    <input
                        #gender="ngModel"
                        required
                        type="radio"
                        [(ngModel)]="user.gender"
                        name="gender"
                        class="form-check-input"
                        value="female"
                        [disabled]="!isEdit"
                    />
                    Female
                </label>
            </user-cell>

            <div class="user__cell user__cell-controls">
                <ng-content></ng-content>
            </div>
        </form>
    `,
})
export class UserComponent implements OnChanges, OnInit {
    @ViewChild('formUser') formUser!: NgForm;
    @ViewChild('firstRef') firstname!: ElementRef<HTMLInputElement>;
    @Input() user!: UserT | UserEmptyT;
    @Input() isEdit = true;
    @Input() submitCb!: any;

    emailPattern = emailPattern;
    isLoading = false;
    setFocusBinded = this.setFocus.bind(this);

    get form() {
        return this.formUser.form;
    }

    setFocus() {
        this.firstname.nativeElement.focus();
    }

    ngOnChanges({ isEdit }: any) {
        if (!this.firstname) return;
        if (!isEdit?.currentValue) return;
        setTimeout(this.setFocusBinded);
    }

    ngOnInit() {
        setTimeout(this.setFocusBinded);
    }

    async onSubmit() {
        try {
            this.isLoading = true;
            this.form.markAllAsTouched();
            if (!this.form.invalid) {
                this.form.markAsUntouched();
                await this.submitCb();
            }
        } finally {
            this.isLoading = false;
        }
    }
}
