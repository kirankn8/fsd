import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: any;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.userService.getAllUsers().subscribe(data => {
      this.userList = data;
    });
  }

}
