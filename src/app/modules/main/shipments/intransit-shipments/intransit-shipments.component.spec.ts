import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntransitShipmentsComponent } from './intransit-shipments.component';

describe('IntransitShipmentsComponent', () => {
  let component: IntransitShipmentsComponent;
  let fixture: ComponentFixture<IntransitShipmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntransitShipmentsComponent]
    });
    fixture = TestBed.createComponent(IntransitShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
