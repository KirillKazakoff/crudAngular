import 'zone.js'; // Included with Angular CLI.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api/api.service';
import { AppComponent } from './components/app.component';
import { UsersComponent } from './components/users.component';
import { UsersHeader } from './components/users-header';
import { ControlsComponent } from './components/user-form/user-controls.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserFormNewComponent } from './components/user-form/user-form-new.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UsersHeader,
        UserFormComponent,
        UserFormNewComponent,
        ControlsComponent,
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
