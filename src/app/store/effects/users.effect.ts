import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LOAD_USERS_ACTION, LOAD_USERS_SUCCESS_ACTION } from '../actions';
import { tap, mergeMap, map } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';


@Injectable()
export class UsersEffect {


    // Este es un Observable que escucha las acciones que se disparan     
    constructor( private actions$: Actions, private usersService: UserService ) {

    }

    // Siempre un effect debe de escuchar una sola acción; el tap es para hacer hacer un metodo secundario o procesar la data enseguida de que se hace el ofType; el mergeMap es para pedir la información y disparar un nuevo Observable; escuchamos la accion, hacemos tap para consolear y hacemos mergeMap para unir la nva info con la anterior
    public loadUsers$ = createEffect(

        () => this.actions$.pipe(
            ofType( LOAD_USERS_ACTION ),

            //tap( data => console.log( 'effect tap', data ) ),

            mergeMap( 
                () => this.usersService.getUsers().pipe(
                    //tap( data => console.log('getUsers effect', data) )
                    map( users => LOAD_USERS_SUCCESS_ACTION( { users: users } ) )
                )
            )
        )
    );


}