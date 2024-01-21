import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnInit {
  CityName: string;
  StateName: string;
  CountryName: string;
  Latitude: string;
  Longitude: string;
  Weather_Description: string;
  Main_Temperature: number;
  Main_Feels_Like: number;
  Main_Temperature_Min: number;
  Main_Temperature_Max: number;
  Main_Humidity: number;
  Date_Time = new Date();

  CityWeatherData: any;

  // Weather_Main: string;
  // Main_Pressure: number;
  // Visibility: number;
  // Wind_Speed: number;
  // Wind_Degrees: number;
  // Wind_Gust: number;
  // Clouds: number;

  constructor(private WeatherService: WeatherService) {}

  ngOnInit(): void {
    console.log(this.CityWeatherData);

    this.CityName = this.WeatherService.CityName;
    this.StateName = this.WeatherService.StateName;
    this.CountryName = this.WeatherService.CountryName;
    this.Latitude = this.WeatherService.Latitude;
    this.Longitude = this.WeatherService.Longitude;

    this.CityWeatherData = this.WeatherService.CityWeatherData;
    
    this.Weather_Description = this.CityWeatherData.weather[0].description;
    this.Main_Temperature = this.CityWeatherData.main.temp;
    this.Main_Feels_Like = this.CityWeatherData.main.feels_like;
    this.Main_Temperature_Max = this.CityWeatherData.main.temp_max;
    this.Main_Temperature_Min = this.CityWeatherData.main.temp_min;
    this.Main_Humidity = this.CityWeatherData.main.humidity;

    // this.Weather_Main = this.CityWeatherData.weather[0].main;
    // this.Main_Pressure = this.CityWeatherData.main.pressure;
    // this.Visibility = this.CityWeatherData.visibility;
    // this.Wind_Speed = this.CityWeatherData.wind.speed;
    // this.Wind_Degrees = this.CityWeatherData.wind.deg;
    // this.Wind_Gust = this.CityWeatherData.wind.gust;
    // this.Clouds = this.CityWeatherData.clouds.all;
  }
}
