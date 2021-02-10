import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';

import { SharedModule } from './shared/shared.module';
import { UploadModule } from './upload/upload.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BlockUIModule.forRoot({
      message: 'Loading...'
    }),
    BlockUIHttpModule.forRoot({
      blockAllRequestsInProgress: true
    }), // Import Block UI Http Module
    SharedModule,
    UploadModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
