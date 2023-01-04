import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithPhoneComponent } from './register-with-phone.component';

describe('RegisterWithPhoneComponent', () => {
  let component: RegisterWithPhoneComponent;
  let fixture: ComponentFixture<RegisterWithPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterWithPhoneComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWithPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
