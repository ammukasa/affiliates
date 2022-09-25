import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponentgodaddy } from './reviews-godaddy.component';

describe('AboutComponent', () => {
  let component: AboutComponentgodaddy;
  let fixture: ComponentFixture<AboutComponentgodaddy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponentgodaddy ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponentgodaddy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
