import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
gettodos1:any
  constructor(private http: HttpClient) { }

  jsonApiData(){
    return this.http.get('https://dummyjson.com/products')
  }
}
