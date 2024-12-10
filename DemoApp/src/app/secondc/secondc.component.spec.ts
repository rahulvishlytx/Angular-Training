import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcComponent } from './secondc.component';

describe('SecondcComponent', () => {
  let component: SecondcComponent;
  let fixture: ComponentFixture<SecondcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
