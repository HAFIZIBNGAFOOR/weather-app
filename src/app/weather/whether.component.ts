import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whether',
  templateUrl: './whether.component.html',
  styleUrls: ['./whether.component.css']
})
export class WhetherComponent {
  whetherData :any
  imageUrl:string=''
  backgroundImageUrl:string ='cold'
  constructor(){

  }
  ngOnInit(): void {

  }
  getData(event:any){
    console.log(event);
    this.whetherData = event
    this.imageUrl= this.whetherData.whetherIcon
    if(this.whetherData.temp < 25){
      this.backgroundImageUrl ='hot'
    }else  this.backgroundImageUrl ='cold'

    console.log(this.imageUrl,' image url');
    
  }
}
