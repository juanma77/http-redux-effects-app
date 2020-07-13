import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { LOAD_USERS_ACTION } from 'src/app/store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public users: UserModel[] =[]; 

  public loading: boolean = false;

  public error: any; 

  constructor( /*private userService: UserService*/ private store: Store<AppState> ) { }

  ngOnInit() {

    this.store.select('users').subscribe( users =>{

      this.users = users.users; 
      
      this.loading = users.loading;

      this.error = users.error; 

      console.log( users.users );

    } );



    this.store.dispatch( LOAD_USERS_ACTION() );

    /*this.userService.getUsers().subscribe( users =>{

      console.log( users );

      this.users = users; 

    } );*/

  }

}
