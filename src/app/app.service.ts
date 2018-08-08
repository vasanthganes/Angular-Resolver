import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class APiService {
  

  constructor(private http: HttpClient) {}

  getUsers(id:string) {
    
     let url = 'https://reqres.in/api/users/';
      if(id !== null){
        url = `${url}${id}`
      }
    return this.http.get(url);
  }
}