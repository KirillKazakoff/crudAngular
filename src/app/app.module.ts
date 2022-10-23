import 'zone.js'; // Included with Angular CLI.
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app';
import { ItemComponent } from './item/item';
import { FiltrationComponent } from './filtration/filtration.component';
import { HeaderComponent } from './header/header';
import { ItemNonActive } from './item/itemNonActive';
import { ItemCheckbox } from './item/itemCheckbox';
import { ItemActive } from './item/itemActive';
import { MainService } from './services/main.service';

@NgModule({
    declarations: [
        AppComponent,
        // item
        ItemComponent,
        ItemCheckbox,
        ItemNonActive,
        ItemActive,

        FiltrationComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
        MainService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
