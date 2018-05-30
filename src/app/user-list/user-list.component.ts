import { Component, OnInit } from '@angular/core';
import { ProviderAst } from '@angular/compiler';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UsersService]
})
export class UserListComponent implements OnInit {

  public users: any[]; 

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // this.usersService.GetUsers().then(users => {
    //   this.users = users;
    // })
  }

}
