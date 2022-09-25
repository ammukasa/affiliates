import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponenta2hosting } from './reviews-a2hosting.component';

describe('AboutComponent', () => {
  let component: AboutComponenta2hosting;
  let fixture: ComponentFixture<AboutComponenta2hosting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponenta2hosting ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponenta2hosting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
