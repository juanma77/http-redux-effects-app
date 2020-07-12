import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor( private userService: UserService ) { }

  ngOnInit() {

    this.userService.getUsers().subscribe( users =>{

      console.log( users );

    } );

  }

}
