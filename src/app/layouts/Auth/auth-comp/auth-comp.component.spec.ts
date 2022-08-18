import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCompComponent } from './auth-comp.component';

describe('AuthCompComponent', () => {
  let component: AuthCompComponent;
  let fixture: ComponentFixture<AuthCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
