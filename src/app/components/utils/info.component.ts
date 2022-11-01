import { Component, OnInit } from '@angular/core';
import { errors$ } from 'src/app/services/api/errors';

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
    title!: string;
    desc!: string;
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