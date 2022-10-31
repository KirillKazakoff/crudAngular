/* eslint-disable class-methods-use-this */
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { fetchStatus$ } from 'src/app/services/api/request';
import { FetchStatusT } from '../../types.type';

@Component({
    selector: 'loader',
    template: ` <div [class.loader--hidden]="!isLoading">loading...</div> `,
})
export class LoaderComponent implements OnInit {
    @Input() id: string = '';
    subscription!: Subscription;
    isLoading: boolean = false;

    ngOnInit() {
        this.subscription = fetchStatus$.subscribe((status) => {
            this.isLoading = status.id === this.id && status.status === 'loading';
            console.log('check');
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
