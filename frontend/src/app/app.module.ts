import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelperListComponent } from './components/helper-list/helper-list.component';
import { HelperFormComponent } from './components/helper-form/helper-form.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { InputFieldComponent } from './components/shared/input-field/input-field.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelperListComponent,
    HelperFormComponent,
    ButtonComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }