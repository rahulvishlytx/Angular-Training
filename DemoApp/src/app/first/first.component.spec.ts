import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import { DemoService } from '../services/demo.service';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;
  let mockDemoService: DemoService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstComponent],
      providers : [{provide: DemoService , useValue: {}}],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockDemoService = TestBed.inject(DemoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
