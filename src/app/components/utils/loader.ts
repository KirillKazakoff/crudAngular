/* eslint-disable class-methods-use-this */
import {
    Component, Input, OnInit, OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { fetchStatus$ } from 'src/app/services/api/request';

@Component({
    selector: 'loader',
    template: ` <div class="loader">loading...</div>`,
})
export class LoaderComponent implements OnInit, OnDestroy {
    @Input() id: string = '';
    subscription!: Subscription;
    isLoading: boolean = false;

    ngOnInit() {
        this.subscription = fetchStatus$.subscribe((status) => {
            this.isLoading = status.id === this.id && status.status === 'loading';
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
