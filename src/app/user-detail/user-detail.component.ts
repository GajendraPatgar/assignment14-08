import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId: string;
  user: any;
  repos: any[];
  constructor(private readonly activatedRoute: ActivatedRoute, private readonly userService: UserService) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params.id;
    this.getUserRepoInfo(this.userId);
    // this.getUserInfo(this.userId);
  }
  getUserRepoInfo(userId) {
    this.userService.getUserRepos(userId).subscribe(
      (data: any) => {
        this.repos = data;
        if (this.repos.length > 0) {
          this.user = this.repos[0].owner;
        } else {
          this.getUserInfo(userId);
        }
      }
    );
  }
  getUserInfo(userId) {
    this.userService.getUserInfo(userId).subscribe(
      (data: any) => this.user = data
    )}

}
