import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class DataService {
  private api = 'http://api.openweathermap.org/data/2.5';
  private key = '4af71dd87878c111509d52acbe644062';
  public myCity = 'Katowice';
  actualWeather;
  cities;


  constructor(private http: HttpClient) {}

  getWeather() {
    const weatherData = this.http.get<any>(`${this.api}/weather?q=${this.myCity}&appid=${this.key}`);

    weatherData.subscribe(
      data => {
        this.actualWeather = data;
        const weather = data.weather[0];
        const temp = data.main.temp;
        console.log(this.actualWeather);
        data = { weather, temp}
        console.log(data);
      },
      error => console.error('ERROR', error)
    )
  }

  getCities() {
    this.http.get('../assets/city.list.json')
    .subscribe(
      data => {
        console.log(data);
        this.cities = data;
      }
    )
  }
}