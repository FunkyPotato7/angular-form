import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";


@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatSelectModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatChipsModule,
        MatIconModule,
        MatLegacyChipsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
