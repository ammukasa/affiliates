import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponenthostinger } from './reviews-hostinger.component';

describe('AboutComponent', () => {
  let component: AboutComponenthostinger;
  let fixture: ComponentFixture<AboutComponenthostinger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponenthostinger ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponenthostinger);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
