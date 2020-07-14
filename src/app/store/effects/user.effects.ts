import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LOAD_USER_SUCCESS_ACTION, LOAD_USER_ERROR_ACTION, LOAD_USER_ACTION } from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffect {


    // Este es un Observable que escucha las acciones que se disparan     
    constructor( private actions$: Actions, private usersService: UserService ) {

    }

    // Siempre un effect debe de escuchar una sola acción; el tap es para hacer hacer un metodo secundario o procesar la data enseguida de que se hace el ofType; el mergeMap es para pedir la información y disparar un nuevo Observable; escuchamos la accion, hacemos tap para consolear y hacemos mergeMap para unir la nva info con la anterior; el map es para mapear la respuesta y regresar un nuevo arreglo y la accion de error debe de llevar el of siempre
    public loadUser$ = createEffect(

        () => this.actions$.pipe(
            ofType( LOAD_USER_ACTION ),

            //tap( data => console.log( 'effect tap', data ) ),

            mergeMap( 
                // Recibimos la accion y el argumento que recibimos de la misma 
                (action) => this.usersService.getUserById( action.id ).pipe(
                    //tap( data => console.log('getUsers effect', data) )
                    map( user => LOAD_USER_SUCCESS_ACTION( { user: user } ) ),

                    catchError( err => of (LOAD_USER_ERROR_ACTION( { payload: err } ) ))
                )
            )
        )
    );


}