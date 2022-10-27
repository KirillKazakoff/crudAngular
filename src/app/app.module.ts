import 'zone.js'; // Included with Angular CLI.
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api/api.service';
import { AppComponent } from './components/app.component';
import { UsersComponent } from './components/users.component';
import { UsersHeader } from './components/users-header.component';
import { UserControlsComponent } from './components/user/user-controls.component';
import { UserComponent } from './components/user/user.component';
import { UserNewComponent } from './components/user/user-new.component';
import { UserNewControlsComponent } from './components/user/user-new-controls';
import { UserNewService } from './services/user-new.service';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UsersHeader,
        UserComponent,
        UserControlsComponent,
        UserNewComponent,
        UserNewControlsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [ApiService, UserNewService],
    bootstrap: [AppComponent],
})
export class AppModule {}
