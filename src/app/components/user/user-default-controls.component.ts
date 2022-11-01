import {
    Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
    selector: 'user-default-controls',
    template: `
        <btn-loader [class.loader--hidden]="!isLoading"></btn-loader>

        <btn-edit *ngIf="!isEdit && !isLoading" (edit)="edit.emit()"></btn-edit>
        <btn-save *ngIf="isEdit && !isLoading"></btn-save>
        <btn-remove *ngIf="!isLoading" (remove)="remove.emit()"></btn-remove>
    `,
})
export class UserDefaultControlsComponent {
    @Input() isLoading: boolean | null = false;
    @Input() isEdit = false;
    @Input() id: string = '';

    @Output() remove = new EventEmitter();
    @Output() edit = new EventEmitter();
}
