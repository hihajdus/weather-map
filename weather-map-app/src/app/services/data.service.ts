import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private api = "http://bulk.openweathermap.org/sample/";

  constructor(private http: HttpClient) {}

  getCities() {
    return this.http.get(this.api);
  }
}
