import {
    Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
    selector: 'user-new-controls',
    template: `
        <loader
            #loader
            [class.loader--hidden]="!loader.isLoading"
            [id]="id"
        ></loader>

        <ng-container *ngIf="!loader.isLoading">
            <btn-save></btn-save>
            <btn-remove (remove)="remove.emit()"></btn-remove>
        </ng-container>
    `,
})
export class UserNewControlsComponent {
    @Input() id: string = '';
    @Output() remove = new EventEmitter();
}
