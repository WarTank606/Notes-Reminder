// this.GetFiveDayWeatherServer(
//   this.Latitude,
//   this.Longitude
//   ).subscribe((Data) => {
//     // console.log("Weather Service Data");
//     // console.log(Data);
//     this.FiveDayWeatherData = Data;
//     this.FiveDay = [];
//     this.Day = [];

  

//   for (let i = 0; i < 40; i = i + 1) {
//     //3-Hour data is entered in the the Three Hour Day Model for each iteration of i
//     this.DataTransfer = new ThreeHourDay(
//       this.FiveDayWeatherData.list[i].dt_txt,
//       this.FiveDayWeatherData.list[i].weather[0].description,
//       this.FiveDayWeatherData.list[i].main.temp,
//       this.FiveDayWeatherData.list[i].main.temp_max,
//       this.FiveDayWeatherData.list[i].main.temp_min,
//       this.FiveDayWeatherData.list[i].main.feels_like,
//       this.FiveDayWeatherData.list[i].main.humidity,
//       this.FiveDayWeatherData.list[i].main.pressure,
//       this.FiveDayWeatherData.list[i].pop,
//       this.FiveDayWeatherData.list[i].visibility,
//       this.FiveDayWeatherData.list[i].wind.speed,
//       this.FiveDayWeatherData.list[i].wind.deg,
//       this.FiveDayWeatherData.list[i].wind.gust,
//       this.FiveDayWeatherData.list[i].clouds.all
//     );

//     if (this.FirstDay == true) {
//       //Counter Needs to be adjust for the first day
//       this.Counter = this.Counter - 1;
//     }
//     this.FirstDay = false;

//     //Increment Counter to count the number of data point for averaging later
//     this.Counter = this.Counter + 1;

//     //Sum up the incoming data
//     this.Day_Temperature = this.Day_Temperature + this.FiveDayWeatherData.list[i].main.temp;
//     this.Day_Feels_Like = this.Day_Feels_Like + this.FiveDayWeatherData.list[i].main.feels_like;
//     this.Day_POP = this.Day_POP + this.FiveDayWeatherData.list[i].pop;
//     this.Day_Wind_Speed = this.Day_Wind_Speed + this.FiveDayWeatherData.list[i].wind.speed;
//     this.Day_Wind_Gust = this.Day_Wind_Gust + this.FiveDayWeatherData.list[i].wind.gust;

//     //Push the completed Three Hour Day Model into the Day Model
//     this.Day.push(this.DataTransfer);
    
    
//     if (i > 0) {
//       //Get the weather data Date of the current date point, and the Date of the past data point
//       let Recorded_Date = new Date(this.FiveDayWeatherData.list[i].dt_txt);
//       let Recorded_Date_Past = new Date(this.FiveDayWeatherData.list[i - 1].dt_txt);
      
      
//       //If the Dates are the same, then do nothing
//       //The data belongs in the same Day and belong in the same Day Model
      
//       //But, if the Date are different then they can NOT be part of the same Day model
//       //So, we check if the dates are different are remove the last record value and place it into a new Day model
//       if (Recorded_Date_Past.getDay() != Recorded_Date.getDay()) {
        
//         //Remove the last record value as it's not part of the current day's dataset
//         //This function removes the last value from the Day array and reassigns it to an new varable,
//         //The new varaible is not used, it's just to remove the last value.
//         this.Removed_Data = this.Day.pop();

//         //Data for current day has ended, so all currectly corrected data is for a single day.
//         //Push that day into Five Day Model
//         this.FiveDay.push(this.Day);
        
//         //Data has now been stored in Five Day Model, so clear Day model to make remove for next day.
//         this.Day = [];
        
//         //Since the last recored value was not part of the current date it was removed, 
//         //but the removed value is the first data point of the next day, so now it is re-add into the Day model
//         this.Day.push(this.DataTransfer);

//         //The Current value is not part of this day, it's part of the next day;
//         this.Day_Temperature = this.Day_Temperature - this.FiveDayWeatherData.list[i].main.temp;
//         this.Day_Feels_Like = this.Day_Feels_Like - this.FiveDayWeatherData.list[i].main.feels_like;
//         this.Day_POP = this.Day_POP - this.FiveDayWeatherData.list[i].pop;
//         this.Day_Wind_Speed = this.Day_Wind_Speed - this.FiveDayWeatherData.list[i].wind.speed;
//         this.Day_Wind_Gust = this.Day_Wind_Gust - this.FiveDayWeatherData.list[i].wind.gust;

//         //Get the average of the values by their's sums by the total number of values 
//         this.Day_Temperature = this.Day_Temperature / this.Counter;
//         this.Day_Feels_Like = this.Day_Feels_Like / this.Counter;
//         this.Day_POP = this.Day_POP / this.Counter;
//         this.Day_Wind_Speed = this.Day_Wind_Speed / this.Counter;
//         this.Day_Wind_Gust = this.Day_Wind_Gust / this.Counter;
        
//         //Push those averages into their respective arrays
//         this.Day_Avg_Date.push(Recorded_Date_Past)
//         this.Day_Avg_Temperature.push(this.Day_Temperature);
//         this.Day_Avg_Feels_Like.push(this.Day_Feels_Like);
//         this.Day_Avg_POP.push(this.Day_POP);
//         this.Day_Avg_Wind_Speed.push(this.Day_Wind_Speed);
//         this.Day_Avg_Wind_Gust.push(this.Day_Wind_Gust)

//         //Reset the values to for the start of the next day
//         this.Day_Temperature = 0;
//         this.Day_Feels_Like = 0;
//         this.Day_POP = 0;
//         this.Day_Wind_Speed = 0;
//         this.Day_Wind_Gust = 0;

//         //Reset the counter
//         this.Counter = 0;

//         //Since the last recored value was not part of the current date it was removed, 
//         //but the removed value is the first data point of the next day, so now it is re-add
//         this.Day_Temperature = this.Day_Temperature + this.FiveDayWeatherData.list[i].main.temp;
//         this.Day_Feels_Like = this.Day_Feels_Like + this.FiveDayWeatherData.list[i].main.feels_like;
//         this.Day_POP = this.Day_POP + this.FiveDayWeatherData.list[i].pop;
//         this.Day_Wind_Speed = this.Day_Wind_Speed + this.FiveDayWeatherData.list[i].wind.speed;
//         this.Day_Wind_Gust = this.Day_Wind_Gust + this.FiveDayWeatherData.list[i].wind.gust;

//       }
//     }
//   }
//   console.log("***********************************")
//   console.log("Weather Service Before Day_Avg_Temperature")
//   console.log(this.Day_Avg_Temperature)
//   console.log("Weather Service Before Five Day")
//   console.log(this.FiveDay)
//   console.log("Weather Service Before Raw Data FiveDayWeatherData")
//   console.log(this.FiveDayWeatherData)
//   console.log("Weather Service Before Raw Data CityWeatherData")
//   console.log(this.CityWeatherData)
//   console.log("***********************************")

//   // console.log(
//   //   '///////////////////////////////////////////////////////////////////'
//   // );
//   // console.log('Day_Avg_Temperature');
//   // console.log(this.Day_Avg_Temperature);
//   // console.log('Day_Feels_Like');
//   // console.log(this.Day_Avg_Feels_Like);
//   // console.log('Day_POP');
//   // console.log(this.Day_Avg_POP);
//   // console.log('Day_Wind_Speed');
//   // console.log(this.Day_Avg_Wind_Speed);
//   // console.log('Day_Wind_Gust');
//   // console.log(this.Day_Avg_Wind_Gust);
//   // console.log(
//   //   '///////////////////////////////////////////////////////////////////'
//   // );
// });




// console.log("***********************************")
// console.log("Weather Service After Day_Avg_Temperature")
// console.log(this.Day_Avg_Temperature)
// console.log("Weather Service After Five Day")
// console.log(this.FiveDay)
// console.log("Weather Service After Raw Data FiveDayWeatherData")
// console.log(this.FiveDayWeatherData)
// console.log("Weather Service After Raw Data CityWeatherData")
// console.log(this.CityWeatherData)
// console.log("***********************************")