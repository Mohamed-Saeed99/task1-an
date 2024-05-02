import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'task1';
  id:number=1
  imgUrl:string="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
  title:string="lapTop"
  description:string="apple lapTop"
  price:number=2000
  btn:string="buy"
  change(){
    if(this.btn==="buy"){
      this.btn="done"
    }else{
      this.btn="buy"
    }
  }
}
