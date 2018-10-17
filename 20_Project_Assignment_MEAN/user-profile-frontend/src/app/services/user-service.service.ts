import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('http://localhost:3000/users/');
  }

  getUser(id) {
    return this.http.get('http://localhost:3000/user/' + id);
  }

  addNewUser(userInfo: any) {
    return this.http.post('http://localhost:3000/user/', userInfo);
  }

  deleteUserDocument(userId, documentId) {
    return this.http.delete('http://localhost:3000/user/' + userId + '/document/' + documentId);
  }

  downloadFile(file: string) {
    return this.http.get(file, {
      responseType: 'blob'
    });
  }
}
