import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  ssoId: string;
  _id: any;

  successfullyRegistered: boolean;

  constructor(private userService: UserServiceService) {
    this.successfullyRegistered = false;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.ssoId = '';
  }

  ngOnInit() { }

  onRegister() {
    const userInfo = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      ssoId: this.ssoId,
    };
    this.userService.addNewUser(userInfo).subscribe(data => {
      console.log(data);
      this._id = data['_id'];
      this.successfullyRegistered = true;
      this.lastName = '';
      this.email = '';
      this.ssoId = '';
    });
  }

  validateForm(): boolean {
    return !(this.firstName.trim() !== ''
      && this.lastName.trim() !== '' && this.ssoId.trim() !== '' && /^.+@.+\..+$/.test(this.email.trim()));
  }

}
