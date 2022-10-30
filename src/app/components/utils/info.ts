import { Component, Input, OnInit } from '@angular/core';
import { errors$ } from '../../services/api/request';

@Component({
    selector: 'info',
    template: `
        <div class="info-wrapper" [class.info-hidden]="!isActive">
            <div class="info">
                <header class="info-header info-header-error">
                    <img src="assets/svg/exclamation.svg" />
                </header>
                <div class="info-content">
                    <span class="info-content-title info-content-title-error">
                        {{ title }}
                    </span>
                    <span class="info-content-desc">{{ desc }}</span>
                </div>
                <footer class="info-footer">
                    <button
                        class="btn btn-info"
                        type="button"
                        (click)="toggle()"
                    >
                        Понятно
                    </button>
                </footer>
            </div>
        </div>
    `,
})
export class InfoComponent implements OnInit {
    @Input() title!: string;
    @Input() desc!: string;
    isActive = false;

    toggle() {
        this.isActive = !this.isActive;
    }

    ngOnInit() {
        errors$.subscribe((error) => {
            if (!error) return;
            this.desc = error.desc;
            this.title = error.title;
            this.toggle();
        });
    }
}
