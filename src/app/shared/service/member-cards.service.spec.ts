import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MemberCardsService } from './member-cards.service';

describe('MemberCardsService', () => {
  let service: MemberCardsService;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],        
    });
    service = TestBed.inject(MemberCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });  
});
