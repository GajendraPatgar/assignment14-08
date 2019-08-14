import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-search-results',
  templateUrl: './user-search-results.component.html',
  styleUrls: ['./user-search-results.component.scss']
})
export class UserSearchResultsComponent implements OnInit {
  searchResults: any;
  constructor(private readonly activatedRoute: ActivatedRoute, private readonly userService: UserService) {}
  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((data: any) => {
      this.getSearchResults(data.params.query);
    });
  }
  getSearchResults(query: string) {
    this.userService.searchUsers(query).subscribe(
      data => this.searchResults = data
    );
  }
}
