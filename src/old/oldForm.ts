// /* eslint-disable @typescript-eslint/no-redeclare */
// /* eslint-disable class-methods-use-this */
// import {
//     Component,
//     Input,
//     Output,
//     ViewChild,
//     EventEmitter,
//     AfterViewInit,
//     ChangeDetectorRef,
// } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { UserFormT, UserT, UserEmptyT } from 'src/app/types.type';

// @Component({
//     selector: 'user',
//     template: `
//         <form
//             #formTemplateUser="ngForm"
//             class="user__row"
//             [class.user__row--active]="isEdit"
//             novalidate
//             (ngSubmit)="onSubmit()"
//         >
//             <user-cell class="user__cell" [model]="firstname">
//                 <input
//                     #firstname="ngModel"
//                     name="firstname"
//                     [(ngModel)]="user.firstname"
//                     placeholder="Write firstname"
//                     required
//                     [disabled]="!isEdit"
//                 />
//             </user-cell>
//             <user-cell class="user__cell" [model]="lastname">
//                 <input
//                     #lastname="ngModel"
//                     name="lastname"
//                     [(ngModel)]="user.lastname"
//                     placeholder="Write lastname"
//                     required
//                     [disabled]="!isEdit"
//                 />
//             </user-cell>
//             <user-cell class="user__cell" [model]="email">
//                 <input
//                     #email="ngModel"
//                     [(ngModel)]="user.email"
//                     name="email"
//                     placeholder="Insert email"
//                     required
//                     [disabled]="!isEdit"
//                 />
//             </user-cell>
//             <user-cell class="user__cell user__cell-age" [model]="age">
//                 <input
//                     appAgeValidator
//                     #age="ngModel"
//                     [(ngModel)]="user.age"
//                     name="age"
//                     placeholder="Insert age"
//                     required
//                     [disabled]="!isEdit"
//                     type="number"
//                 />
//             </user-cell>
//             <user-cell
//                 class="user__cell user__cell-gender"
//                 [model]="getGender(gender)"
//             >
//                 <input
//                     #gender="ngModel"
//                     [(ngModel)]="user.gender"
//                     name="gender"
//                     placeholder="Insert gender"
//                     required
//                     [disabled]="!isEdit"
//                 />
//             </user-cell>
//             <div class="user__cell user__cell-controls">
//                 <ng-content></ng-content>
//             </div>
//         </form>
//     `,
// })
// export class UserComponent implements AfterViewInit {
//     @ViewChild('formTemplateUser') formTemplateUser!: NgForm;
//     @Input() user!: UserT | UserEmptyT;
//     @Input() isEdit = true;
//     @Output() submitCb = new EventEmitter();
//     formModel!: UserFormT;

//     constructor(private changeRef: ChangeDetectorRef) {}
//     onSubmit() {
//         this.changeRef.markForCheck();
//         this.formTemplateUser.form.markAllAsTouched();
//         if (this.formTemplateUser.form.valid) {
//             this.formTemplateUser.form.markAsUntouched();
//             this.submitCb.emit();
//         }
//     }

//     getGender(model: any) {
//         const model2 = { ...model };
//         return model2;
//     }

//     ngAfterViewInit() {
//         setTimeout(() => {
//             this.formModel = this.formTemplateUser.form as UserFormT;
//         });
//     }
// }
