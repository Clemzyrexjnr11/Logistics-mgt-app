import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShipmentsComponent } from './all-shipments.component';

describe('AllShipmentsComponent', () => {
  let component: AllShipmentsComponent;
  let fixture: ComponentFixture<AllShipmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllShipmentsComponent]
    });
    fixture = TestBed.createComponent(AllShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
