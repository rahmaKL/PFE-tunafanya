import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiche7Component } from './fiche7.component';

describe('Fiche7Component', () => {
  let component: Fiche7Component;
  let fixture: ComponentFixture<Fiche7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fiche7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fiche7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
