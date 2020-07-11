import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

// Usamos "exports" para cuando queremos usar algun componente fuera de este modulo 
@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
