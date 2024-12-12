import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  afterAll(() => {

  })
  beforeAll(()=>{

  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // arrange 
    const app = fixture.componentInstance; // act
    expect(app).toBeTruthy(); // assert
  });

  it(`should have as title 'DemoApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('DemoApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, DemoApp');
  });

  it("should do something", ()=>{

    
  })
});
