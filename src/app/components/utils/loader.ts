import {
    Component, Input, OnInit, OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { fetchStatus$ } from 'src/app/services/api/subjectsRx/fetchStatus';

@Component({
    selector: 'loader',
    template: `<div class="loader">loading...</div>`,
})
export class LoaderComponent implements OnInit, OnDestroy {
    @Input() id: string = '';
    subscription!: Subscription;
    isLoading: boolean = false;

    ngOnInit() {
        this.subscription = fetchStatus$.subscribe((status) => {
            const isThisBtn = status.id === this.id;
            this.isLoading = status.status === 'loading' && isThisBtn;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
