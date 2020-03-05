import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  form: FormGroup;

  city_name = 'Katowice';
  cities = [];

  constructor(private fb: FormBuilder) {
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

  onSubmit() {

  }
}
