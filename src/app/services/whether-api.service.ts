import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ApiID } from './config';


@Injectable({
  providedIn: 'root'
})
export class WhetherApiService {
  whetherApi:string='https://api.openweathermap.org/data/2.5/weather'
  apiId:string = ApiID 

  constructor(private http :HttpClient) { }
  
  getWhether(city:string){
    return this.http.get(`${this.whetherApi}?q=${city}&appid=${this.apiId}`)
  }
}
