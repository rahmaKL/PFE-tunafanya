import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiche4Component } from './fiche4.component';

describe('Fiche4Component', () => {
  let component: Fiche4Component;
  let fixture: ComponentFixture<Fiche4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fiche4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fiche4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
