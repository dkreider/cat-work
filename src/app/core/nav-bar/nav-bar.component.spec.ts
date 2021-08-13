import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NavBarComponent } from "./nav-bar.component";

describe('NavbarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('paragraph element should display Welcome Back, Alice!', () => {
    let expected, actual;
    component.userName = "Alice";
    var p: HTMLElement = fixture.nativeElement.querySelector("p");
    fixture.detectChanges();
    expected = "Welcome Back, Alice!";
    actual = p.textContent;
    expect(actual).toEqual(expected);
  })

  it('getHelloMessage: should return Welcome Back, Friend!', () => {
    let actualResult, expectedResult;
    actualResult = component.getHelloMessage();
    expectedResult = "Welcome Back, Friend!";
    expect(actualResult).toEqual(expectedResult);
  });
  it('getHelloMessage: should return Welcome Back, Bob!', () => {
    let actualResult, expectedResult;
    actualResult = component.getHelloMessage('Bob');
    expectedResult = "Welcome Back, Bob!";
    expect(actualResult).toEqual(expectedResult);
  });
});