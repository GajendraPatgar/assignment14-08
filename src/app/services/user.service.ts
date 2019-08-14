import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Urls } from '../constants/urls'; 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }
  getUserList() {
    return this.http.get(Urls.users);
  }
  getUserRepos(userId) {
    const url = Urls.users + '/' + userId + '/repos';
    return this.http.get(url);
  }
  getUserInfo(userId) {
    const url = Urls.users + '/' + userId;
    return this.http.get(url);
  }
  searchUsers(query) {
    const params = new HttpParams().append('q', query);
    return this.http.get(Urls.searchUsers, { params });
  }
}
