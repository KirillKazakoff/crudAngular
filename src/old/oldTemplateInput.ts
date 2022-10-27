// import { Component, Input, TemplateRef } from '@angular/core';

// @Component({
//     selector: 'user-controls',
//     template: `
//         <ng-template #editBtn>
//             <button type="button" class="btn btn-edit">
//                 <img src="assets/svg/edit.svg" width="30px" alt="button edit" />
//             </button>
//         </ng-template>

//         <ng-template #saveBtn>
//             <button class="btn btn-save" type="button">
//                 <img src="assets/svg/save.svg" width="30px" alt="button save" />
//             </button>
//         </ng-template>

//         <button type="button" class="btn btn-delete">
//             <img src="assets/svg/delete.svg" width="35px" alt="button delete" />
//         </button>
//         <ng-container
//             *ngIf="
//                 controlsTemplate;
//                 then controlsTemplate;
//                 else defaultControls
//             "
//         ></ng-container>
//     `,
// })
// export class ControlsComponent {
//     @Input() controlsTemplate!: TemplateRef<any>;
// }
