import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolybtnComponent } from './polybtn.component';

describe('PolybtnComponent', () => {
  let component: PolybtnComponent;
  let fixture: ComponentFixture<PolybtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolybtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolybtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
