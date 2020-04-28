import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { NgxSpinnerModule } from "ngx-spinner";

const appRoutes: Routes = [
  { path: '', component: InputFormComponent},
  { path: 'results', component: ResultsListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ResultsListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
