import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    this.http.get('http:localhost:3000/users/');
  }

  getUser(id) {
    this.http.get('http:localhost:3000/user/' + id);
  }

  addNewUser(userInfo: any) {
    this.http.post('http:localhost:3000/user/', userInfo);
  }

  addUserDocument(userId, document) {
    this.http.post('http:localhost:3000/user/' + userId + '/document/', document);
  }

  deleteUserDocument(userId, documentId) {
    this.http.delete('http:localhost:3000/user/' + userId + '/document/' + documentId + userId + '/document/');
  }
}
