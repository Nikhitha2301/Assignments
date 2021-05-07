import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component {

  status:boolean=false;
  status2:boolean=false;
  status3:boolean=false;

  //Change status function 1
  changeStatus(){
    this.status=!this.status;
    this.status2=false;
    this.status3=false;
  }

  //change status function 2
  changeStatus2(){
    this.status=false;
    this.status2=!this.status2;
    this.status3=false;
  }

  //change status function 3
  changeStatus3(){
    this.status=false;
    this.status2=false;
    this.status3=!this.status3;
  }
}
