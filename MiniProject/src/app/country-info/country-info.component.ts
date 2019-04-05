import { Component, OnInit, Input } from "@angular/core";
import { CountryService } from "../country.service";

@Component({
  selector: "app-country-info",
  templateUrl: "./country-info.component.html",
  styleUrls: ["./country-info.component.css"]
})
export class CountryInfoComponent implements OnInit {
  @Input() country: CountryService;
  constructor() {}

  ngOnInit() {
  }
}
