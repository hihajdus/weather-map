import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  cities;
  weather;

  form: FormGroup;

  constructor(private fb: FormBuilder, public dataService: DataService, private http: HttpClient) {
    this.form = this.fb.group({
      cities: ['']
    });
  }

  ngOnInit() {
    console.log('onInit');
    this.cities = this.dataService.getCities();
  }

  onSubmit() {
    this.weather = this.dataService.getWeather();

  }
}
