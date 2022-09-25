import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponenthostgator } from './reviews-hostgator.component';

describe('AboutComponent', () => {
  let component: AboutComponenthostgator;
  let fixture: ComponentFixture<AboutComponenthostgator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponenthostgator ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponenthostgator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
