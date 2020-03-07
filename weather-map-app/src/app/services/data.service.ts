import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class DataService {
  private api = 'http://api.openweathermap.org/data/2.5';
  private key = '4af71dd87878c111509d52acbe644062';
  private myCity = 'Katowice';
  actualWeather;
  cities: any = [];


  constructor(private http: HttpClient) {}

  getWeather() {
    interface ActualWeather {
      results: Array<object>
    }

    this.http.get<ActualWeather[]>(`${this.api}/weather?q=${this.myCity}&appid=${this.key}`)
    .subscribe(
      data => {this.actualWeather = data},
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

