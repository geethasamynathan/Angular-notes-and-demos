import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarraydemoComponent } from './formarraydemo.component';

describe('FormarraydemoComponent', () => {
  let component: FormarraydemoComponent;
  let fixture: ComponentFixture<FormarraydemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormarraydemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormarraydemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
