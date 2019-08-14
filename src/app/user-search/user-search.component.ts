import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }
  searchUser(query: string) {
    if (!query.trim()) {
      return;
    }
    this.router.navigate(['/users/search'], { queryParams: { query }});
  }
}
