import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarformComponent } from './carform/carform.component';
import { CarspecsComponent } from './carspecs/carspecs.component';
import { PricerankerPipe } from './pipes/priceranker.pipe';
import { DaterankerPipe } from './pipes/dateranker.pipe';
import { SearcherPipe } from './pipes/searcher.pipe';
import { PricefilterPipe } from './pipes/pricefilter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CarformComponent,
    CarspecsComponent,
    PricerankerPipe,
    DaterankerPipe,
    SearcherPipe,
    PricefilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
