import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormComponent } from './todolist/form/form.component';
import { ListComponent } from './todolist/list/list.component';
import { CardComponent } from './todolist/list/card/card.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    FormComponent,
    ListComponent,
    CardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
