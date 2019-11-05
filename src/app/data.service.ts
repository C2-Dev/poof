import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  REST_API_SERVER = "http://35.224.254.196:8000/farts/1/";

  constructor(private httpClient: HttpClient) { }
  
  public getFarts(){
    return this.httpClient.get(this.REST_API_SERVER); }
}
