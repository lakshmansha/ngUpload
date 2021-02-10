import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { UploadService } from './upload.service';

@Injectable({
  providedIn: 'root'
})
export class UploadResolver implements Resolve<any> {

  constructor(private uploadService: UploadService) { }

  resolve() {
    return forkJoin([this.uploadService.GetUploads()]).pipe(map(allResponses => {
      return {
        Uploads: allResponses[allResponses.length - 1]
      }
    }));
  }
}
