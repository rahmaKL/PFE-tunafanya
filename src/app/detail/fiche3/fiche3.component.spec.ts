import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiche3Component } from './fiche3.component';

describe('Fiche3Component', () => {
  let component: Fiche3Component;
  let fixture: ComponentFixture<Fiche3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fiche3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fiche3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
