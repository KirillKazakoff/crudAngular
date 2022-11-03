import { Component, OnInit } from '@angular/core';
import { InfoT } from 'src/app/types.type';
import { errorObs$ } from '../../services/api/errors';

@Component({
    selector: 'info',
    template: `
        <div class="info__wrapper" [class.info--hidden]="!isActive">
            <div class="info">
                <header class="info__header info__header--error">
                    <img src="assets/svg/exclamation.svg" />
                </header>
                <div class="info__content">
                    <span
                        class="info__content-title info__content-title--error"
                    >
                        {{ title }}
                    </span>
                    <span class="info__content-desc">{{ desc }}</span>
                </div>
                <footer class="info__footer">
                    <button
                        class="btn info__btn"
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
    title: string = 'default title';
    desc: string = 'default description';
    isActive = false;

    toggle() {
        this.isActive = !this.isActive;
    }

    ngOnInit() {
        errorObs$.subscribe((error: InfoT) => {
            if (!error) return;

            this.desc = error.desc;
            this.title = error.title;
            this.toggle();
        });
    }
}
