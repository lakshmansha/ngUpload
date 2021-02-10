import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '@env/environment';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {   
    expect(component).toBeTruthy();
  });

  describe('Html Testing', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });    

    it('should render router', () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('router-outlet').textContent).toBeDefined('Router Outlet not Defined.');
    });

    it('should render block-ui', () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('block-ui').textContent).toBeDefined('Block-UI not Defined.');
    });
  });

  describe('Code Testing', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it(`should have as title 'ngUpload'`, () => {
      expect(component.title).toEqual(environment.App_Name);
    });

  })
});
