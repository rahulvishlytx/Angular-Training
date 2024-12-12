import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from '../../pipe/reverse.pipe';

xdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, ReversePipe],
      imports: [ReactiveFormsModule],
      providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  fit("should call console log", ()=>{
     const logSpy = spyOn(console, 'log');
     
     const mockuserForm = {} as FormGroup; 
     component.onSubmit(mockuserForm)
    
     expect(logSpy).toHaveBeenCalled();
     expect(logSpy).toHaveBeenCalledWith(mockuserForm.value);
     expect(22).toBe(22);
    
  })
});
