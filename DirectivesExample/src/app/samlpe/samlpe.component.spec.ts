import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamlpeComponent } from './samlpe.component';

describe('SamlpeComponent', () => {
  let component: SamlpeComponent;
  let fixture: ComponentFixture<SamlpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamlpeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamlpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
