import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverpageComponent } from './driverpage.component';

describe('DriverpageComponent', () => {
  let component: DriverpageComponent;
  let fixture: ComponentFixture<DriverpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriverpageComponent]
    });
    fixture = TestBed.createComponent(DriverpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
