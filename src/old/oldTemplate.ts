// import { Component } from '@angular/core';
// import { nanoid } from 'nanoid';
// import { UserT } from '../../types.type';

// @Component({
//     selector: 'user-form-new',
//     template: `
//         <!-- <ng-template #newFormControls>
//             <button type="button" class="btn btn__delete">
//                 <img
//                     src="assets/svg/delete.svg"
//                     width="35px"
//                     alt="button delete"
//                 />
//             </button>
//         </ng-template> -->

//         <user-form class="user-form" [user]="user"> </user-form>
//     `,
// })
// export class UserFormNewComponent {
//     user: UserT = {
//         firstname: '',
//         lastname: '',
//         email: '',
//         gender: '',
//         age: 0,
//         id: nanoid(),
//     };
// }

// @ViewChild('tbody') tbody!: ElementRef;

// ngAfterViewInit() {
//     console.log(this.tbody);
// }

// /* eslint-disable class-methods-use-this */
// import { Component, Input, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { UserFormT, UserT, UserEmptyT } from 'src/app/types.type';

// @Component({
//     selector: 'user',
//     template: `
//         <form #formTemplateUser="ngForm" class="user__row" novalidate>
//             <!-- <div inputWrapper [cls]="'firstname'" [model]="firstname">
//                 <div class="input-tip" [hidden]="firstname.valid">Err</div>
//                 <input
//                     #firstname="ngModel"
//                     name="firstname"
//                     [(ngModel)]="user.firstname"
//                     placeholder="Write firstname"
//                     required
//                 />
//             </div> -->
//             <user-cell
//                 class="user__cell user__cell-firstname"
//                 [model]="firstname"
//             >
//                 <input
//                     #firstname="ngModel"
//                     name="firstname"
//                     [(ngModel)]="user.firstname"
//                     placeholder="Write firstname"
//                     required
//                 />
//             </user-cell>

//             <user-cell class="user__cell" [model]="lastname">
//                 <input
//                     #lastname="ngModel"
//                     name="lastname"
//                     [(ngModel)]="user.lastname"
//                     placeholder="Write lastname"
//                     required
//                 />
//             </user-cell>

//             <!-- <div
//                 class="input-wrapper user__cell user__cell-lastname"
//                 [class.is-invalid]="lastname.invalid"
//             >
//                 <input
//                     #lastname="ngModel"
//                     name="lastname"
//                     [(ngModel)]="user.lastname"
//                     placeholder="Write lastname"
//                     required
//                 />
//             </div> -->

//             <div
//                 class="user__cell user__cell-email"
//                 [class.is-invalid]="email.invalid"
//             >
//                 <input
//                     #email="ngModel"
//                     [(ngModel)]="user.email"
//                     name="email"
//                     placeholder="Insert email"
//                     required
//                 />
//             </div>

//             <div
//                 class="user__cell user__cell-age"
//                 [class.is-invalid]="age.invalid"
//             >
//                 <input
//                     #age="ngModel"
//                     [(ngModel)]="user.age"
//                     name="age"
//                     placeholder="Insert age"
//                     required
//                     pattern="[1-9]\\d*"
//                     type="number"
//                 />
//             </div>
//             <div
//                 class="user__cell user__cell-gender"
//                 [class.is-invalid]="gender.invalid"
//             >
//                 <input
//                     #gender="ngModel"
//                     [(ngModel)]="user.gender"
//                     name="gender"
//                     placeholder="Insert gender"
//                     required
//                 />
//             </div>
//             <div class="user__cell user__cell-controls">
//                 <ng-content></ng-content>
//             </div>
//         </form>
//     `,
// })
// export class UserComponent {
//     @ViewChild('formTemplateUser') formTemplateUser!: NgForm;
//     @Input() user!: UserT | UserEmptyT;
//     @Input() isEdit = true;
//     formModel!: UserFormT;

//     ngAfterViewInit() {
//         setTimeout(() => {
//             this.formModel = this.formTemplateUser.form as UserFormT;
//         });
//     }
// }

// ngAfterViewInit() {
//     setTimeout(() => {
//         this.formModel = this.formTemplateUser.form as UserFormT;
//     });
// }
