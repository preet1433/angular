import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './services/apiservice.service';
import { log } from 'console';

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
public flag_of_category_reult:boolean=false
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ALL data variables~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

public category_dynamic_data:any=[]
public category_array:any=[]



public category_checked_value:any





//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
category_btn_click(){
  this.flag_of_category_div=true
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






//=========================================to display data of category on click=============
public category_data_push:any=[]
result_of_checkbox(){
  console.log(this.category_checked_value);
  this.apidata.forEach((data:any)=>{
    if(data.category.includes(this.category_checked_value)){
      console.log('checked value');
      this.category_data_push.push(data)
    }
  }
)
console.log(this.category_data_push);

//category data flags%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  this.flag_of_category_reult=true
  this.flag_of_category_div=false

}
category_reset_button(){
  this.flag_of_category_div=true
  this.flag_of_category_reult=false
  this.category_data_push=[]

}

///^^^^^^^^^^^^^^^^^^^ADD TO CART BUTTON^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
public add_to_cart_pused_data:any=[]

public cart_item_count:any=0
add_to_cart(data:any){
  data.qun = 1;

  // });
  console.log('quantity',data.qun)
// }
this.add_to_cart_pused_data.push(data)
console.log(this.add_to_cart_pused_data)


this.cart_item_count=Object.keys(this.add_to_cart_pused_data).length
console.log(this.cart_item_count);

}

//#########        BRAND  WISE  DATA  SEARCH      ###############################################
public div_flag_of_brand:boolean=false
public brand_dynamic_data: any=[]
public brand_array:any=[]


public dd_selected_value:any

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



brand_wise_data_search(){

  this.div_flag_of_brand=true
  
  this.flag_of_category_div=false
  this.flag_of_category_reult=false

console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');


this.apidata.forEach((element:any) => {
  this.brand_array.push(element)

});
console.log(this.brand_array);
console.log('hiiiiiiiiii');

this.uniquedatax11(this.brand_array)
console.log('hello'+this.category_dynamic_data) 
  //  console.log(this.category_dynamic_data);
   



}

public brand_display:any=[]
public brand_checkbox_flag:boolean=false
dropsinglevalue(){
  this.brand_display=[]  
  this.apidata.forEach((data:any)=>{
    
    if(data.category.includes(this.dd_selected_value)){
      console.log(data)
      this.brand_display.push(data.brand)
    }
   })
   console.log(this.brand_display)
this.brand_checkbox_flag=true
}

uniquedatax11(arr:any){
  arr.forEach((item:any)=>{
this.brand_dynamic_data.push(item.category)
const distinctArray = this.brand_dynamic_data.filter((n:any, i:any) => this.brand_dynamic_data.indexOf(n) === i);
this.brand_dynamic_data=distinctArray
 })


}
public brand_data_in_card:any =[]
public brand_checked_value:any
brand_check_selected(){

  this.apidata.forEach((data:any)=>{
    if(data.brand.includes(this.brand_checked_value)){
      console.log('checked value');
      this.brand_data_in_card.push(data)
    }
  }
)
console.log(this.brand_data_in_card)
}


}