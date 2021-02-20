import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { MemberCardsService } from 'src/app/shared/service/member-cards.service';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientTestingModule, 
        RouterTestingModule
      ],
      providers: [MemberCardsService]
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Is the css class called app ', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    expect(fixture.debugElement.children[0].attributes.class).toEqual('app');
  });
  it('Is the css class called app__page ', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    expect(fixture.debugElement.children[0].children[0].attributes.class).toEqual('app__page');
  });
  it('Unit test Does the scss class exist cards', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const testElementHtmlButton = fixture.debugElement.query(By.css('.cards'));
    const elButton = testElementHtmlButton.nativeElement;
    expect(elButton).toBeDefined();
  });
  it('Unit test Does the scss class exist card__section', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const testElementHtmlButton = fixture.debugElement.query(By.css('.card__section'));
    const elButton = testElementHtmlButton.nativeElement;
    expect(elButton).toBeDefined();
  });
});
