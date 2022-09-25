import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponentdreamhost } from './reviews-dreamhost.component';

describe('AboutComponent', () => {
  let component: AboutComponentdreamhost;
  let fixture: ComponentFixture<AboutComponentdreamhost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponentdreamhost ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponentdreamhost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
