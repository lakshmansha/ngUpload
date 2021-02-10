import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUpload } from './IUpload.interface';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  title: string;
  Uploads: IUpload[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.PageLoad();
  }

  PageLoad() {
    this.title = this.route.snapshot.data.title;
    this.Uploads = this.route.snapshot.data.responses["Uploads"];
  }

}
