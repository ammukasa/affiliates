import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getAllUser() {
    return new Observable(o => o.next(
[
{
  "id": 1,
  "first_name": "Kunal",
  "last_name": "Vijan",
  "email": "vijan87@gmail.com",
  "gender": "Male",
  "ip_address": "1.1.1.1",
  "impact": "Applicable"
},
{
  "id": 2,
  "first_name": "Kunal",
  "last_name": "Vijan",
  "email": "vijan87@gmail.com",
  "gender": "Male",
  "ip_address": "1.1.1.1",
  "impact": "Not Applicable"
},
{
  "id": 3,
  "first_name": "Kunal",
  "last_name": "Vijan",
  "email": "vijan87@gmail.com",
  "gender": "Male",
  "ip_address": "1.1.1.1",
  "impact": "FYI"
},
{
  "id": 4,
  "first_name": "First",
  "last_name": "Last",
  "email": "first.last@gmail.com",
  "gender": "Female",
  "ip_address": "1.1.1.1",
  "impact": "FYI"
}
]
));
  }
}