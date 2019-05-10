import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { FileComponentComponent } from './components/file-component/file-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OfferDetailsComponent,
    FileComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
