import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }
  getData():Observable<any>{
    // gagination
    const url = "https://randomuser.me/api/?results=200"
    return this.http.get<any>(url)
  }
}
