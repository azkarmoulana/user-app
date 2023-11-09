import { NotFoundComponent } from './not-found.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent = NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NotFoundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 404 message', () => {
    const message404Container = fixture.debugElement.query(
      By.css("[data-testid='404']")
    );

    expect(message404Container.nativeElement.textContent).toEqual('404');
  });

  it('should contain page not found text', () => {
    const textContainter = fixture.debugElement.query(
      By.css("[data-testid='page-not-found']")
    );

    expect(textContainter.nativeElement.textContent).toEqual(
      ' Page not found '
    );
  });
});
