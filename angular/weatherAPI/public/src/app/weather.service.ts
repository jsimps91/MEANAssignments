import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {
apiKey = '2c4b5b221aa9ceac3cb58c91303c63e4'

  constructor(private _http: HttpClient) { 
    
  }

  getWeather(city){
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`).map(response => response);
    
  }

}
