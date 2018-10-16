import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {

  domain = 'http://localhost:3000';
  _id: any;
  userDocuments: any;
  URL;
  description = '';
  public uploader: FileUploader;

  constructor(private route: ActivatedRoute, private userService: UserServiceService) {
    this._id = this.route.snapshot.paramMap.get('id');
    this.URL = this.domain + '/user/' + this._id + '/document/';
    this.uploader = new FileUploader({ url: this.URL, itemAlias: 'file' });
  }

  ngOnInit() {
    this.getDocuments();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('description', this.description);
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.getDocuments();
      this.description = '';
    };
  }

  getDocuments() {
    this.userService.getUser(this._id).subscribe(data => {
      this.userDocuments = data['uploadedDocuments'];
    });
  }

  onDelete(docId) {
    this.userService.deleteUserDocument(this._id, docId).subscribe(data => {
      this.getDocuments();
    });
  }
}
