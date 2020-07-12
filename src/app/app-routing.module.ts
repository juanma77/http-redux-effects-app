import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './users/list/list.component';
import { UserComponent } from './users/user/user.component';

const ROUTES: Routes = [

  { path: 'home', component: ListComponent  },
  { path: 'user/:id', component: UserComponent },
  { path: '**', redirectTo: 'home' }


]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( ROUTES )
  ],
  exports: [
    RouterModule
  ]  
  
})
export class AppRoutingModule { }
