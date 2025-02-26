import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  SdsButton,
  SdsInputField,
  SdsFieldset,
  SdsSelectField,
  SdsSelectItem,
  SdsButtonGroup,
  SdsSlider,
  SdsLegend,
  SdsText,
  SdsFieldGroup,
  SdsButtonDanger,
} from 'sds-angular-component-library';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SdsButton,
    SdsInputField,
    SdsFieldset,
    SdsSelectField,
    SdsSelectItem,
    SdsButtonGroup,
    SdsSlider,
    SdsLegend,
    SdsText,
    SdsFieldGroup,
    SdsButtonDanger,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
