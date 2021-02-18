import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { MemberCardsService } from 'src/app/shared/service/member-cards.service';
import { RouterTestingModule } from '@angular/router/testing';

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
});
