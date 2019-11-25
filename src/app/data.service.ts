import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  FART_ENDPOINT = "https://104.154.175.134:8443/farts/2/";
  USER_ENDPOINT = "http://104.154.175.134:8443/users/";
  

  constructor(private httpClient: HttpClient) { }
  
  public getFarts(){
    console.log(this.httpClient.get(this.FART_ENDPOINT));
    return this.httpClient.get(this.FART_ENDPOINT); }
  
}
