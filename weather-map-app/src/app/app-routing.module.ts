import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  { path: "weather", component: WeatherComponent },
  { path: "forecast", component: ForecastComponent },
  { path: "map", component: MapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
