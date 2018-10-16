import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { NewUserComponent } from './new-user/new-user.component';


const appRoutes: Routes = [
  { path: 'user/:id', component: UploadDocumentComponent },
  { path: 'newuser', component: NewUserComponent },
  { path: 'users', component: UserListComponent },
  {
    path: '', redirectTo: '/users', pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UploadDocumentComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
