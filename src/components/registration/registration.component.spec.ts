import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationComponent, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should validate email and password match', () => {
    component.form.patchValue({ name: 'A', email: 'notanemail', password: '123456', confirmPassword: '123' });
    fixture.detectChanges();

    expect(component.form.valid).toBeFalsy();
    expect(component.form.get('email')?.errors).toBeTruthy();
    expect(component.form.errors?.['passwordMismatch']).toBeTruthy();
  });

  it('should call alert and console when valid on save', () => {
    spyOn(window, 'alert');
    spyOn(console, 'log');

    component.form.patchValue({ name: 'Test', email: 't@example.com', password: '123456', confirmPassword: '123456', gender: 'male' });
    fixture.detectChanges();

    component.onSave();

    expect(window.alert).toHaveBeenCalledWith('Registration successful');
    expect(console.log).toHaveBeenCalled();
  });

});
