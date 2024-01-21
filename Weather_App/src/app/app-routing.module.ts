import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentComponent } from './current/current.component';
import { HourlyComponent } from './hourly/hourly.component';
import { DailyComponent } from './daily/daily.component';
import { CityLocationComponent } from './city-weather/city-location/city-location.component';
import { AppComponent } from './app.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';

const routes: Routes = [
  
  {
    path: 'Home', component: AppComponent, children: 
    [
      { path: 'City_Weather', component: CityWeatherComponent, children: 
      [
        {path: 'City_Location', component: CityLocationComponent}
      ]
      }
    ,
      { path: 'Current', component: CurrentComponent },
      { path: 'Hourly', component: HourlyComponent },
      { path: 'Daily', component: DailyComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
