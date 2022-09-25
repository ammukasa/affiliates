import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponentinterserver } from './reviews-interserver.component';

describe('AboutComponent', () => {
  let component: AboutComponentinterserver;
  let fixture: ComponentFixture<AboutComponentinterserver>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponentinterserver ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponentinterserver);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
