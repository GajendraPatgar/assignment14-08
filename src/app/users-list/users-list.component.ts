import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  userList: any[] = [];
  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.getUserList();
  }
  getUserList() {
    this.userService.getUserList().subscribe(
      (data: any) => this.userList = data
    );
  }
}
