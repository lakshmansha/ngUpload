import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadComponent } from "./upload.component";
import { UploadResolver } from './upload.resolver';

const routes: Routes = [
  {
    path: "",
    component: UploadComponent,
    data: { title: "Upload Files" },
    resolve: { responses: UploadResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule { }
