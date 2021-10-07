import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { AuthService } from '../shared/services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  let authServiceSpy: Spy<AuthService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {
          provide: AuthService, useValue: createSpyFromClass(AuthService)
        },
        {
          provide: Router, useValue: routerSpy
        }
      ]
    })
    .compileComponents();

    authServiceSpy = TestBed.inject<any>(AuthService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the home page on successful login', fakeAsync(() => {
    component.loginForm.setValue({username: 'bob@bob.com', password: '12345678'});
    fixture.detectChanges();

    component.login();

    tick(1000);

    const navargs = routerSpy.navigateByUrl.calls.first().args[0];
    expect(navargs).toEqual("/");
  }));

  it('should login if form is valid', () => {
    let formData = { username: "email@email.com", password: "12345678" };
    authServiceSpy.login.and.nextWith();

    component.loginForm.setValue(formData);
    component.login();

    expect(authServiceSpy.login).toHaveBeenCalledWith("email@email.com", "12345678");
  });

  it('should not login if form is not valid', () => {
    let formData = { username: "email", password: "123456" };
    authServiceSpy.login.and.nextWith();

    component.loginForm.setValue(formData);
    component.login();

    expect(authServiceSpy.login).not.toHaveBeenCalled();
  });

  it("should not login if username is invalid", () => {
    component.loginForm.get("username")?.setValue("email");
    expect(component.loginForm.get("username")?.valid).toBeFalse();
  })
});
