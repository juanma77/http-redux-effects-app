import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'https://reqres.in/api';

  constructor( private httpClient: HttpClient ) { }


  public getUsers() {

    return this.httpClient.get( `${ this.url }/users?per_page=6` ).pipe(  map( res =>{

      return res['data']; 

      } )
    );
  }
}
