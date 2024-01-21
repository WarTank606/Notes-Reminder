import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css'],
})
export class DailyComponent implements OnInit {
  FiveDay = [];
  Day_Avg_Date = [];
  Day_Avg_Temperature = [];
  Day_Avg_Feels_Like = [];
  Day_Avg_POP = [];
  Day_Avg_Wind_Speed = [];
  Day_Avg_Wind_Gust = [];

  constructor(private WeatherService: WeatherService) {}

  ngOnInit() {
    this.WeatherService.GetFiveDayWeatherServer(
      this.WeatherService.Latitude,
      this.WeatherService.Longitude
    ).subscribe((Data) => {
      // console.log("Daily Component Data");
      // console.log(Data);
      this.WeatherService.ProcessDailyWeatherData(Data);
      this.FiveDay = this.WeatherService.FiveDay;
      this.Day_Avg_Date = this.WeatherService.Day_Avg_Date;
      this.Day_Avg_Temperature = this.WeatherService.Day_Avg_Temperature;
      this.Day_Avg_Feels_Like = this.WeatherService.Day_Avg_Feels_Like;
      this.Day_Avg_POP = this.WeatherService.Day_Avg_POP;
      this.Day_Avg_Wind_Speed = this.WeatherService.Day_Avg_Wind_Speed;
      this.Day_Avg_Wind_Gust = this.WeatherService.Day_Avg_Wind_Gust;
  
      console.log("***********************************")
      console.log("Daily Day_Avg_Temperature")
      console.log(this.Day_Avg_Temperature)
      console.log("Daily Five Day")
      console.log(this.FiveDay)
      console.log("***********************************")
    });  
  }
}
