import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPortalComponent } from './register-portal.component';

describe('RegisterPortalComponent', () => {
  let component: RegisterPortalComponent;
  let fixture: ComponentFixture<RegisterPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
