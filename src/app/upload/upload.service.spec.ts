import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from '@env/environment';

import { TempUploads } from './upload.service.mockdata';

import { UploadService } from './upload.service';

describe('UploadService', () => {
  let service: UploadService;
  let injector: TestBed;  
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let testUrl: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UploadService]
    });

    // Inject the http service and test controller for each test
    injector = getTestBed();
    service = TestBed.inject(UploadService);
    httpClient = TestBed.get(HttpClient);
    httpMock  = TestBed.get(HttpTestingController);
    testUrl = environment.ServerUrl + 'Upload';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Code Testing', () => {

    it('GetUploads should return data', () => {
      service.GetUploads().subscribe((res: any) => {
        expect(res).toEqual(TempUploads);
      });
  
      const req = httpMock.expectOne(testUrl);
      expect(req.request.method).toBe('GET');
      req.flush(TempUploads);
    });

    it('GetUploads should return No data', () => {
      service.GetUploads().subscribe((res: any) => {
        expect(res).toEqual([]);
      });
  
      const req = httpMock.expectOne(testUrl);
      expect(req.request.method).toBe('GET');
      req.flush([]);
    });
  });
});
