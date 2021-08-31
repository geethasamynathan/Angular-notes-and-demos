import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifcgidemoComponent } from './ngifcgidemo.component';

describe('NgifcgidemoComponent', () => {
  let component: NgifcgidemoComponent;
  let fixture: ComponentFixture<NgifcgidemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifcgidemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifcgidemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
