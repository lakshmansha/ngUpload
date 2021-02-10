import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import { IUpload } from './IUpload.interface';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  GetUploads(): Observable<IUpload[]> {
    let Url = environment.ServerUrl + "Upload";

    return this.http.get<IUpload[]>(Url)
      .pipe(map(res => {
        const data = res;

        data.forEach((value: IUpload) => {
          value.uploadDate = this.getDateString(this.getDateFrmJSON_T(value.uploadDate.toString()), '/');
          value.fileSizeStr = this.formatBytes(value.fileSize);
        })

        return data;
      }));
  }

  Upload(files: any) {
    let Url = environment.ServerUrl + "Upload";

    const formData = new FormData();
    formData.append('file', files);

    return this.http.post<any>(Url, formData)
    .pipe(map(res => {
      return res;
    }));
  }

  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  getDateFrmJSON_T(jsonDate: string) {
    let fulldate: Date;
    if (jsonDate !== '') {
      fulldate = new Date(jsonDate);
    }
    return fulldate;
  }

  IsDate(value: any) {
    let valid = false;

    if (value && Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value)) {
      valid = true;
    }

    return valid;
  }

  // Get Date on Multi Format.
  getDateString(dt: any, Format: string) {
    let values = new Date();
    if (this.IsDate(dt)) {
      values = dt;
    }
    const day = values.getDate();
    const Month = values.getMonth() + 1;
    const year = values.getFullYear();

    let SDate = '';
    if (Format === '-') {
      SDate = this.RoundNum(day) + '-' + this.RoundNum(Month) + '-' + year;
    } if (Format === 'name') {
      SDate = this.RoundNum(day) + '' + this.RoundNum(Month) + '' + year;
    } else if (Format === 'sht_name') {
      const strYear = (year.toString()).substring(2);
      SDate = this.RoundNum(day) + '' + this.RoundNum(Month) + '' + strYear;
    } else {
      SDate = this.RoundNum(day) + '/' + this.RoundNum(Month) + '/' + year;
    }
    return SDate;
  }

  RoundNum(value: number) {
    let val = '';
    if (value < 10) {
      val = '0' + value;
    } else {
      val = value.toString();
    }
    return val;
  }
}
