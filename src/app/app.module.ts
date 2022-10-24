import 'zone.js'; // Included with Angular CLI.
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
        ApiService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
