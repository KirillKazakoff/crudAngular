import {
    Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
    selector: 'user-default-controls',
    template: `
        <ng-template #btnEdit
            ><btn-edit (edit)="edit.emit()"></btn-edit>
        </ng-template>
        <ng-template #btnSave>
            <btn-save (save)="save.emit()"></btn-save>
        </ng-template>

        <ng-content *ngIf="isEdit; then btnSave; else btnEdit"></ng-content>
        <btn-remove (remove)="remove.emit()"></btn-remove>
    `,
})
export class UserDefaultControlsComponent {
    @Input() isEdit = false;
    @Output() save = new EventEmitter();
    @Output() remove = new EventEmitter();
    @Output() edit = new EventEmitter();
}
