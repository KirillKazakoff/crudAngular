import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'user-new-controls',
    template: `
        <btn-save></btn-save>
        <btn-remove (remove)="remove.emit()"></btn-remove>
    `,
})
export class UserNewControlsComponent {
    @Output() remove = new EventEmitter();
}
