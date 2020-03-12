import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class DataService {
  private api = 'http://api.openweathermap.org/data/2.5';
  private key = '4af71dd87878c111509d52acbe644062';

  constructor(private http: HttpClient) {}

  getWeather(location) {
    const weatherData = this.http.get<any>(`${this.api}/weather?q=${location}&appid=${this.key}`);

    return weatherData
      .pipe (
        map(data => {
          return {
            weatherMain: data.weather[0].main,
            weatherDescription: data.weather[0].description,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            windDeg: data.wind.deg,
            clouds: data.clouds.all,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
          };
        }),
      );
  }

  getCities() {
    const citiesData = this.http.get('../assets/city.list.json');
  }
}