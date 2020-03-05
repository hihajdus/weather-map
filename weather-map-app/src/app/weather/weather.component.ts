import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  cities$;

  form: FormGroup;

  city_name = 'Katowice';
  cities = [];

  constructor(private fb: FormBuilder, public dataService: DataService) {
    this.form = this.fb.group({
      cities: ['']
    });

    this.cities = this.getCities();
  }

  getCities() {
    return [
      { name: "Katowice" },
      { name: "Warszawa" },
      { name: "New York" },
      { name: "London" }
    ];
  }

  ngOnInit() {
    this.cities$ = this.dataService.getCities();
  }

  onSubmit() {

  }
}
