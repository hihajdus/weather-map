import { DataService } from './../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  data$;

  cities;

  public weather;
  public location;

  form: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {

    this.form = this.fb.group({
      cities: [''],
      location: ''
    });

  }

  ngOnInit() {
    console.log('onInit');
  }

  onSubmit() {
    this.location = this.form.value.location;
    console.log(this.location);
    this.data$ = this.dataService.getWeather(this.location);
  }
}
