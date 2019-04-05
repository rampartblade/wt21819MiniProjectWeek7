import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  apiKey = "5f1ea22a92e9fd7de17d44976ec4252a";
  baseUrl = `https://api.darksky.net/forecast/${this.apiKey}/`;

  constructor(private http: HttpClient) {}

  getWeather(lat: number, lng: number) {
    let url = `${this.baseUrl}${lat},${lng}?units=si&exclude=minutely,hourly,flags,alert`;

    return this.http.get(url);
  }
}
