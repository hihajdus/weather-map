import { DataService } from './../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable, of } from 'rxjs';
import { faThermometerEmpty, faTint, faWeight, faCompass, faTachometerAlt, faCloud, faSun } from '@fortawesome/free-solid-svg-icons';

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

  faTemperature = faThermometerEmpty;
  faHumidity = faTint;
  faPressure = faWeight;
  faDegrees = faCompass;
  faSpeed = faTachometerAlt;
  faCloud = faCloud;
  faSun = faSun;



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
