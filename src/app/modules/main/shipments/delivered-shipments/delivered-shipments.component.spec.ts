import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredShipmentsComponent } from './delivered-shipments.component';

describe('DeliveredShipmentsComponent', () => {
  let component: DeliveredShipmentsComponent;
  let fixture: ComponentFixture<DeliveredShipmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveredShipmentsComponent]
    });
    fixture = TestBed.createComponent(DeliveredShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
