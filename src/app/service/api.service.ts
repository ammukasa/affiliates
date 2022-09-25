import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const IP = '172.20.10.3:8080'  
const Affiliates = `http://172.20.10.3:8080/api/affilates`;
const Fastcomet = `http://${IP}/api/fastcomets`;
const Bluehost = `http://${IP}/api/bluehosts`;
const A2hosting = `http://${IP}/api/a2hostings`;
const Dreamhost = `http://${IP}/api/dreamhosts`;
const Hostarmada = `http://${IP}/api/hostarmadas`;
const Interserver = `http://${IP}/api/interservers`;
const Godaddy = `http://${IP}/api/godaddys`;
const Cloudways = `http://${IP}/api/cloudways`;
const Hostinger = `http://${IP}/api/hostingers`;
const Hostgator = `http://${IP}/api/hostgators`;
const contact_us = `http://${IP}/api/contactus`;

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  // Node/Express API
  REST_API: string = `http://${IP}/api/contactus`;
  REST_APIFastcomet: string = `http://${IP}/api/fastcomets`;
  REST_APIBluehost: string = `http://${IP}/api/bluehosts`;
  REST_API2: string = `http://${IP}/api/fastcomets`;
  REST_APIBluehost2: string = `http://${IP}/api/bluehosts`;
  REST_APIa2hosting: string = `http://${IP}/api/a2hostings`;
  REST_APIdreamhost: string = `http://${IP}/api/dreamhosts`;
  REST_APIhostarmada: string = `http://${IP}/api/hostarmadas`;
  REST_APIinterserver: string = `http://${IP}/api/interservers`;
  REST_APIgodaddy: string = `http://${IP}/api/godaddys`;
  REST_APIcloudways: string = `http://${IP}/api/cloudways`;
  REST_APIhostinger: string = `http://${IP}/api/hostingers`;
  REST_APIhostgator: string = `http://${IP}/api/hostgators`;
  REST_APIA: string = `http://${IP}/api/affilates`;

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Add
  AddItem(data: any) {
    let API_URL = `${this.REST_API}/add-book`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // AddFastcomet(data: any) {
  //   let API_URL = `${this.REST_APIFastcomet}/add-book`;
  //   return this.httpClient.post(API_URL, data)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }

  AddFastcomet(data: any) {
    return this.httpClient.post(Fastcomet, data);
  }

  // AddBluehost(data: any) {
  //   let API_URL = `${this.REST_APIBluehost}/add-book`;
  //   return this.httpClient.post(API_URL, data)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }

  AddBluehost(data: any) {
    return this.httpClient.post(Bluehost, data);
  }

  // AddA2hosting(data: any) {
  //   let API_URL = `${this.REST_APIa2hosting}/add-book`;
  //   return this.httpClient.post(API_URL, data)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }

  AddA2hosting(data: any) {
    return this.httpClient.post(A2hosting, data);
  }

  // AddDreamhost(data: any) {
  //   let API_URL = `${this.REST_APIdreamhost}/add-book`;
  //   return this.httpClient.post(API_URL, data)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }

  AddDreamhost(data: any) {
    return this.httpClient.post(Dreamhost, data);
  }


  // AddAHostarmada(data: any) {

    
  //   let API_URL = `${this.REST_APIhostarmada}`;
  //   return this.httpClient.post(API_URL, data)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }

  // AddAHostarmada(data:any) {
  //   let API_URL = `${this.REST_APIhostarmada}`;
  //   return this.httpClient.post(API_URL, data);
  // }

  AddAHostarmada(data: any) {
    return this.httpClient.post(Hostarmada, data);
  }
  
  // AddInterserver(data: any) {
  //   let API_URL = `${this.REST_APIinterserver}/add-book`;
  //   return this.httpClient.post(API_URL, data)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }

  AddInterserver(data: any) {
    return this.httpClient.post(Interserver, data);
  }
  

  // AddGodaddy(data: any) {
  //   let API_URL = `${this.REST_APIgodaddy}/add-book`;
  //   return this.httpClient.post(API_URL, data)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }

  AddGodaddy(data: any) {
    return this.httpClient.post(Godaddy, data);
  }

  // AddCloudways(data: any) {
  //   let API_URL = `${this.REST_APIcloudways}/add-book`;
  //   return this.httpClient.post(API_URL, data)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }

  AddCloudways(data: any) {
    return this.httpClient.post(Cloudways, data);
  }


  // AddHostinger(data: any) {
  //   let API_URL = `${this.REST_APIhostinger}/add-book`;
  //   return this.httpClient.post(API_URL, data)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }


  AddHostinger(data: any) {
    return this.httpClient.post(Hostinger, data);
  }

  // AddHostgator(data: any) {
  //   let API_URL = `${this.REST_APIhostgator}/add-book`;
  //   return this.httpClient.post(API_URL, data)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }

  AddHostgator(data: any) {
    return this.httpClient.post(Hostgator, data);
  }
  // Get all objects
  Getitem() {
    return this.httpClient.get(`${this.REST_API}`);
  }


  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(contact_us);
  }

  getAffiliates(): Observable<any[]> {
    return this.httpClient.get<any[]>(Affiliates);
  }

  // fastcomet
  getFastcomet(): Observable<any[]> {
    return this.httpClient.get<any[]>(Fastcomet);
  }

  // bluehost
  getBluehost(): Observable<any[]> {
    return this.httpClient.get<any[]>(Bluehost);
  }

   // a2hosting
   getA2hosting(): Observable<any[]> {
    return this.httpClient.get<any[]>(A2hosting);
  }


  getDreamhost(): Observable<any[]> {
    return this.httpClient.get<any[]>(Dreamhost);
  }

  getHostarmada(): Observable<any[]> {
    return this.httpClient.get<any[]>(Hostarmada);
  }


  getInterserver(): Observable<any[]> {
    return this.httpClient.get<any[]>(Interserver);
  }

  getGodaddy(): Observable<any[]> {
    return this.httpClient.get<any[]>(Godaddy);
  }

  getCloudways(): Observable<any[]> {
    return this.httpClient.get<any[]>(Cloudways);
  }

  getHostinger(): Observable<any[]> {
    return this.httpClient.get<any[]>(Hostinger);
  }

  getHostgator(): Observable<any[]> {
    return this.httpClient.get<any[]>(Hostgator);
  }


  // Get single object
  GetItem(id: any) {
    let API_URL = `${this.REST_API2}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

  // bluehost
  GetItemBluehost(id: any) {
    let API_URL = `${this.REST_APIBluehost2}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

   // a2hosting
   GetItema2hosting(id: any) {
    let API_URL = `${this.REST_APIa2hosting}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

   // dreamhost
   GetItemDreamhost(id: any) {
    let API_URL = `${this.REST_APIdreamhost}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

   // hostarmada

  GetItemhostarmada(id: any) {
    let API_URL = `${this.REST_APIhostarmada}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }
  

   // interserver
   GetItemInterserver(id: any) {
    let API_URL = `${this.REST_APIinterserver}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

   // godaddy
   GetItemGodaddy(id: any) {
    let API_URL = `${this.REST_APIgodaddy}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

   // cloudways
   GetItemCloudways(id: any) {
    let API_URL = `${this.REST_APIcloudways}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

   // hostinger
   GetItemhostinger(id: any) {
    let API_URL = `${this.REST_APIhostinger}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }


    // hostgator
    GetItemhostgator(id: any) {
      let API_URL = `${this.REST_APIhostgator}/${id}`;
      return this.httpClient.get(API_URL, { headers: this.httpHeaders })
        .pipe(map((res: any) => {
          return res || {}
        }),
          catchError(this.handleError)
        )
    }
  

   
  
  GetItem2(id: any) {
    let API_URL = `${this.REST_APIA}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

  updateBook(id: any, data: any) {
    let API_URL = `${this.REST_API2}/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }



  // fastcomet
  updateItem(_id: any, data: any) {
    let API_URL = `${this.REST_API2}/${_id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // bluehost
  updateItembluehost(_id: any, data: any) {
    let API_URL = `${this.REST_APIBluehost2}/${_id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

   // a2hosting
   updateItema2hosting(_id: any, data: any) {
    let API_URL = `${this.REST_APIa2hosting}/${_id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // a2hosting
  updateItemdreamhost(_id: any, data: any) {
    let API_URL = `${this.REST_APIdreamhost}/${_id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // a2hosting
  updateItemhostarmada(_id: any, data: any) {
    let API_URL = `${this.REST_APIhostarmada}/${_id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // a2hosting
  updateIteminterserver(_id: any, data: any) {
    let API_URL = `${this.REST_APIinterserver}/${_id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // a2hosting
  updateItemgodaddy(_id: any, data: any) {
    let API_URL = `${this.REST_APIgodaddy}/${_id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // a2hosting
  updateItemcloudways(_id: any, data: any) {
    let API_URL = `${this.REST_APIcloudways}/${_id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // a2hosting
  updateItemhostinger(_id: any, data: any) {
    let API_URL = `${this.REST_APIhostinger}/${_id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }


  updateItemhostgator(_id: any, data: any) {
    let API_URL = `${this.REST_APIhostgator}/${_id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // home
  updateItem2(_id: any, data: any) {
    let API_URL = `${this.REST_APIA}/${_id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  putProduct(data: any, id: any) {
    return this.httpClient.put<any>(this.REST_APIFastcomet + id, data);
  }


  // Delete
  deleteItem(id: any) {
    let API_URL = `${this.REST_API}/delete-book/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    )
  }


  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}