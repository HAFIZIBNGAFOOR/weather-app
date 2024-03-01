import { Component, EventEmitter, Output } from '@angular/core';
import { WhetherApiService } from 'src/app/services/whether-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() sendWhetherData = new EventEmitter();

  whetherData={
    whether :'',
    temp :0,
    humidity:'',
    whetherIcon:'',
    city:'',
    wind:'',
    description:'',
    maxTemp:0,
    minTemp:0
  }
  
  constructor(private service:WhetherApiService){}
  ngOnInit(): void {
    this.getData('bangalore')
  }

  sendData(city:string){
    this.service.getWhether(city).subscribe({
      next:(res:any)=>{
        this.whetherData.whether = res.weather[0].main
        this.whetherData.temp = res.main.temp -273.15;
        this.whetherData.humidity = res.main.humidity 
        this.whetherData.whetherIcon = `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`,
        this.whetherData.city = res.name;
        this.whetherData.wind = res.wind.speed;
        this.whetherData.description = res.weather[0].description;
        this.whetherData.minTemp = res.main.temp_min-273.15
        this.whetherData.maxTemp = res.main.temp_max-273.15
        this.sendWhetherData.emit(this.whetherData)
      },
      error:(err)=>{
        console.log(err,'error from subscribe')
    }
    })
  }


  getData(city:string){
    this.service.getWhether(city).subscribe({
      next:(res:any)=>{
        this.whetherData.whether = res.weather[0].main
        this.whetherData.temp = res.main.temp -273.15;
        this.whetherData.humidity = res.main.humidity ;
        this.whetherData.city = res.name;
        this.whetherData.wind = res.wind.speed;
        this.whetherData.description = res.weather[0].description;
        this.whetherData.minTemp = res.main.temp_min -273.15
        this.whetherData.maxTemp = res.main.temp_max -273.15
        this.whetherData.whetherIcon = `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
        this.sendWhetherData.emit(this.whetherData)
      },
      error:(err)=>{
        console.log(err,'error from subscribe')
      }
    })
  }
}
