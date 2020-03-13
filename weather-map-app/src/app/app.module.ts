import { HttpClientModule } from "@angular/common/http";
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { MapComponent } from './map/map.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [AppComponent, WeatherComponent, MapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMKhagUc5sg6QW0hZIDKn204lh46YQhJg'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
