import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './services/apiservice.service';
import e from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  json11: any;
  public apidata:any=[]//api data
selectedCategories: any;
  
  constructor(private jsondata:ApiserviceService){}
  ngOnInit(): void {

    this.jsondata.jsonApiData().subscribe(i=>{
      this.json11=i;
    });
    this.apidata=this.json11.products
   }
  title = 'prime';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ALL DIV FLAGS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
public flag_of_category_div :boolean =false

public category_dynamic_data:any=[]
public category_array:any=[]



public category_checked_value:any





//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
category_btn_click(){
  this.flag_of_category_div=true
  console.log('hello')
  this.category_array=[]
this.apidata.forEach((element:any) => {
  this.category_array.push(element)
});
// console.log(this.category_array);
this.uniquedata(this.category_array)
}
//111111111111111111111unique data method---------------------------------------------
uniquedata(arr:any){
  arr.forEach((item:any)=>{
this.category_dynamic_data.push(item.category)
const distinctArray = this.category_dynamic_data.filter((n:any, i:any) => this.category_dynamic_data.indexOf(n) === i);
this.category_dynamic_data=distinctArray
 })

 console.log(this.category_dynamic_data) 
}







abcd(){
  console.log(this.category_checked_value);
  
}
}
