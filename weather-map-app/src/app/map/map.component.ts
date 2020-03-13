import { DataService } from './../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent {

  constructor(private dataService: DataService) {}

}
