import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponenthostarmada } from './reviews-hostarmada.component';

describe('AboutComponent', () => {
  let component: AboutComponenthostarmada;
  let fixture: ComponentFixture<AboutComponenthostarmada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponenthostarmada ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponenthostarmada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
