import { DataService } from './../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable, of } from 'rxjs';
import { faThermometerEmpty, faTint, faWeight, faCompass, faTachometerAlt, faCloud, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"]
})
export class WeatherComponent implements OnInit {
  public data$;
  public location;
  public form: FormGroup;

  public latitude = -28.68352;
  public longitude = -147.20785;
  public mapType = "satellite";

  faTemperature = faThermometerEmpty;
  faHumidity = faTint;
  faPressure = faWeight;
  faDegrees = faCompass;
  faSpeed = faTachometerAlt;
  faCloud = faCloud;
  faSun = faSun;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.form = this.fb.group({
      location: ""
    });
  }

  ngOnInit() {
    console.log("onInit");
  }

  onSubmit() {
    this.location = this.form.value.location;
    this.data$ = this.dataService.getWeather(this.location);
  }
}
