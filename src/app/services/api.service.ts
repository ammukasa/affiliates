import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

const baseUrl = 'http://localhost:3001/employees/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postProduct(data : any){
    return this.http.post<any>("http://localhost:3001/productList/",data);
  }

  getProduct(){

    return this.http.get<any>("http://localhost:3000/productList/");
  }


  // getProduct(){
  //   return this.http.get<any>(baseUrl);
  // }

  getAffiliates(){
    return this.http.get<any>("http://localhost:3000/affilates/");
  }

  putProduct(data: number, id: number){
    return this.http.put<any>("http://localhost:3000/productList/"+id, data);
  }

  putAffiliates(data: number, id: number){
    return this.http.put<any>("http://localhost:3000/affilates/"+id, data);
  }

  putContactUs(data: number, id: number){
    return this.http.put<any>("http://localhost:3000/contactus/"+id, data);
  }

  getContactUs(){
    return this.http.get<any>("http://localhost:3000/contactus/");
  }

  postContactUs(data : any){
    return this.http.post<any>("http://localhost:3000/contactus/",data);
  }

  broseGet(){
    return this.http.get<any>(baseUrl);
  }
}
