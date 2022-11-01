import {
    Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
    selector: 'user-new-controls',
    template: `
        <btn-loader *ngIf="isLoading"></btn-loader>

        <ng-container *ngIf="!isLoading">
            <btn-save></btn-save>
            <btn-remove (remove)="remove.emit()"></btn-remove>
        </ng-container>
    `,
})
export class UserNewControlsComponent {
    @Input() id: string = '';
    @Input() isLoading: boolean | null = false;
    @Output() remove = new EventEmitter();
}
