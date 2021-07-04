import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiche6Component } from './fiche6.component';

describe('Fiche6Component', () => {
  let component: Fiche6Component;
  let fixture: ComponentFixture<Fiche6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fiche6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fiche6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
