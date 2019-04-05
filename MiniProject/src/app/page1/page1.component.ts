import { Component, OnInit } from "@angular/core";
import { CountryService} from "../country.service";

@Component({
  selector: "app-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.css"]
})
export class Page1Component implements OnInit {
  countries = null;
  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getCountries().subscribe(data=>{
      this.countries = data;
    });
  }
}
