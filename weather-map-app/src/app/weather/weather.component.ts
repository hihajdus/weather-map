import { DataService } from './../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  cities;

  city = 'London';
  temp = 0;

  data$;
  form: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {

    this.form = this.fb.group({
      cities: ['']
    });
  }

  ngOnInit() {
    console.log('onInit');
  }

  onSubmit() {
    this.cities = this.dataService.getCities();
    this.data$ = this.dataService.getWeather();
  }
}
