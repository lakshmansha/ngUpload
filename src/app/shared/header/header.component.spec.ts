import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
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

    it(`should render title 'Upload'`, () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('a').textContent).toBeDefined('Upload');
    });

  });

  describe('Code Testing', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it(`should have as title 'Upload'`, () => {    
      component.PageLoad();
      expect(component.title).toEqual('Upload');
    });

    it(`should have as title 'Upload'`, () => {          
      expect(component.title).toBeUndefined();
    });

  });
});
