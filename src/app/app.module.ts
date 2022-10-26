import 'zone.js'; // Included with Angular CLI.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api/api.service';
import { AppComponent } from './components/app.component';
import { UsersComponent } from './components/users.component';
import { TableHeader } from './components/table-header';
import { UserFormComponent } from './components/user-form.component';
import { UserFormNewComponent } from './components/user-form-new.component';
import { UserFormControls } from './components/user-form-controls.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        TableHeader,
        UserFormControls,
        UserFormComponent,
        UserFormNewComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [ApiService],
    bootstrap: [AppComponent],
})
export class AppModule {}
