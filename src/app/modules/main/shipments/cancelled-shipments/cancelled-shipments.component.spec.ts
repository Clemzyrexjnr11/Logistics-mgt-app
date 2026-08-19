import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledShipmentsComponent } from './cancelled-shipments.component';

describe('CancelledShipmentsComponent', () => {
  let component: CancelledShipmentsComponent;
  let fixture: ComponentFixture<CancelledShipmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelledShipmentsComponent]
    });
    fixture = TestBed.createComponent(CancelledShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
