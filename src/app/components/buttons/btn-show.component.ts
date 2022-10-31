import {
    Component, Output, EventEmitter, Input,
} from '@angular/core';

@Component({
    selector: 'btn-show',
    template: `
        <button
            [class.btn-show--hidden]="isActiveForm"
            (click)="showForm.emit()"
        >
            <img width="45px" src="assets/svg/show.svg" />
        </button>
    `,
})
export class BtnShowComponent {
    @Output() showForm = new EventEmitter();
    @Input() isActiveForm: boolean = false;
}
