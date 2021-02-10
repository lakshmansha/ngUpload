import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload-area',
  templateUrl: './upload-area.component.html',
  styleUrls: ['./upload-area.component.scss']
})
export class UploadAreaComponent implements OnInit {

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  OnUploadChange($event: Event) {
    const files = $event.target['files'];
    let message: string = "";

    if(this.IsArrayValid(files)) {
      const file = files[0];

      var _validFileExtensions = environment.FileExtensions;
      var Extensions = environment.Extensions;
      const regex = new RegExp('([a-zA-Z0-9\s_\\.\-:])+(' + _validFileExtensions.join('|') + ')$');
      if (regex.test(file.name.toLowerCase())) {
        this.uploadService.Upload(file)
        .subscribe((res) => {
          alert(" File Uploaded Successfully");
          window.location.reload();
        },(error) => {
          console.log(error);
          alert("Unable to Upload, Please try later...");
        });
      } else {
        message = 'Please Select the Valid Files with Extensions' + Extensions.toUpperCase();
        alert(message);
      }
    }
  }

  IsArrayValid(value: any) {
    let valid = false;
    
    if(value !== undefined && value !== null) {
      if(value.length > 0) {
        valid = true;
      }
    }

    return valid;
  }

}
