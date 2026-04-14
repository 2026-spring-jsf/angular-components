import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DweiseClickCounter } from './dweise-click-counter';

describe('DweiseClickCounter', () => {
  let component: DweiseClickCounter;
  let fixture: ComponentFixture<DweiseClickCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DweiseClickCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DweiseClickCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
