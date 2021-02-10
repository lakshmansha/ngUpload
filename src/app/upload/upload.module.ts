import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from '../upload/upload.component';
import { UploadService } from './upload.service';
import { UploadResolver } from './upload.resolver';
import { ViewAreaComponent } from './view-area/view-area.component';
import { UploadAreaComponent } from './upload-area/upload-area.component';

@NgModule({
  declarations: [UploadComponent, ViewAreaComponent, UploadAreaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UploadRoutingModule
  ],
  providers: [UploadService, UploadResolver]
})
export class UploadModule { }
