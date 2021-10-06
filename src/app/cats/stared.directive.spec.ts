import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaredDirective } from './stared.directive';

@Component({
  template: `<i [stared]="false"></i>`
})
class TestComponet {};

describe('StaredDirective', () => {
  let fixture: ComponentFixture<TestComponet>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponet, StaredDirective]
    })
    .createComponent(TestComponet);

    fixture.detectChanges();
  });

  it('should be stared', () => {
    var element: HTMLElement = fixture.nativeElement.querySelector("i");
    expect(element.className).toEqual('bi-star');
  })

  it('should create an instance', () => {
    const directive = new StaredDirective();
    expect(directive).toBeTruthy();
  });
});
