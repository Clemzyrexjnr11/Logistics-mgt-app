import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShipmentComponent } from './new-shipment.component';

describe('NewShipmentComponent', () => {
  let component: NewShipmentComponent;
  let fixture: ComponentFixture<NewShipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewShipmentComponent]
    });
    fixture = TestBed.createComponent(NewShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
