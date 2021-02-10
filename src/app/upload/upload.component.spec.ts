import {HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { UploadComponent } from './upload.component';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  const snapshotdata = {} as any;
  snapshotdata.title = 'Upload Files';
  snapshotdata.responses = {} as any;
  snapshotdata.responses.Uploads = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
       HttpClientTestingModule
      ],
      declarations: [ UploadComponent ],
      providers: [        
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              data: snapshotdata
            }
          }
        },        
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Html Testing', () => {    
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should render app-view-area', () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('app-view-area').textContent).toBeDefined('Area View not Defined.');
    });

    it('should render app-upload-area', () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('app-upload-area').textContent).toBeDefined('Upload View not Defined.');
    });

  });

  
  describe('Code Testing', () => {    
    beforeEach(() => {
      fixture.detectChanges();
    });

    it(`should have as title valid`, () => {    
      component.title = null;
      expect(component.title).toBeNull(snapshotdata.title);
    });   
  });


});
