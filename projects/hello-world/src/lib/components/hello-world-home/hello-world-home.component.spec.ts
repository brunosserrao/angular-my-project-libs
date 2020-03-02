import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldHomeComponent } from './hello-world-home.component';

describe('HelloWorldHomeComponent', () => {
  let component: HelloWorldHomeComponent;
  let fixture: ComponentFixture<HelloWorldHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
