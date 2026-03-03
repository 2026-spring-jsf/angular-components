import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaToppings } from './pizza-toppings';

describe('PizzaToppings', () => {
  let component: PizzaToppings;
  let fixture: ComponentFixture<PizzaToppings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaToppings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaToppings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
