import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponentcloudways } from './reviews-cloudways.component';

describe('AboutComponent', () => {
  let component: AboutComponentcloudways;
  let fixture: ComponentFixture<AboutComponentcloudways>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponentcloudways ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponentcloudways);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
