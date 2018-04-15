import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {

  city = 'san jose'
  temp;
  humidity;
  min;
  max;
  icon;
  img;
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    let observable = this._weatherService.getWeather(this.city)
    observable.subscribe(data => {
      console.log(data)
      this.temp = this.fahrenheit(data['main']['temp'])
      this.min = this.fahrenheit(data['main']['temp_min'])
      this.max = this.fahrenheit(data['main']['temp_max'])
      this.humidity = data['main']['humidity']
      this.icon = data['weather'][0]['icon']
      this.img = `http://openweathermap.org/img/w/${this.icon}.png`
    })
  }
  fahrenheit(temp){
    return Math.floor((9/5)*(temp - 273) + 32)
  }

}
