import {
    Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
    selector: 'user-default-controls',
    template: `
        <loader class="loader" #loader [id]="id"></loader>
        <btn-edit *ngIf="!isEdit" (edit)="edit.emit()"></btn-edit>
        <btn-save *ngIf="isEdit && !loader.isLoading"></btn-save>
        <btn-remove (remove)="remove.emit()"></btn-remove>
    `,
})
export class UserDefaultControlsComponent {
    @Input() isEdit = false;
    @Input() id: string = '';

    @Output() remove = new EventEmitter();
    @Output() edit = new EventEmitter();
}
