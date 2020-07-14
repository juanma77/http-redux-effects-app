import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { LOAD_USER_ACTION } from 'src/app/store/actions';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: UserModel;      

  constructor( private router: ActivatedRoute, private store: Store<AppState> ) { }

  // Obtenemos el id de un usuario y disparamos la accion de cargar usuario
  ngOnInit() {

    this.store.select('user').subscribe( user => {

      this.user = user.user; 


    })


    this.router.params.subscribe( ({ id }) => {

      //console.log( user.id );

      this.store.dispatch( LOAD_USER_ACTION( { id }) );


    })

  }

}
