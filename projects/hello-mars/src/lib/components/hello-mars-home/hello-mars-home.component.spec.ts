import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloMarsHomeComponent } from './hello-mars-home.component';

describe('HelloMarsHomeComponent', () => {
  let component: HelloMarsHomeComponent;
  let fixture: ComponentFixture<HelloMarsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloMarsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloMarsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
