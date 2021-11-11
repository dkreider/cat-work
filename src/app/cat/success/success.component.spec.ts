import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createSpyFromClass } from 'jasmine-auto-spies';
import { CatsService } from 'src/app/shared/services/cats.service';

import { SuccessComponent } from './success.component';

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessComponent ],
      providers: [
        {
            provide: CatsService, useValue: createSpyFromClass(CatsService)
        }
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
