import 'zone.js'; // Included with Angular CLI.
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api/api.service';
import { AppComponent } from './components/app.component';
import { TableComponent } from './components/users.component';

@NgModule({
    declarations: [AppComponent, TableComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule],
    providers: [ApiService],
    bootstrap: [AppComponent],
})
export class AppModule {}
