import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { MemberCardsService } from 'src/app/shared/service/member-cards.service';
import { Block, ImageUrl } from './model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit ,OnDestroy {
  subscription: Subscription 
  title: string = ''; 
  firstListOfMembershipCards: Block = {};
  secondListOfMembershipCards: Block = {};
  thirdListOfMembershipCards: Block = {};
  firstListOfMembershipCardsImageUrl: ImageUrl = {};
  secondListOfMembershipCardsImageUrl: ImageUrl = {};
  thirdListOfMembershipCardsImageUrl: ImageUrl = {};

  constructor(private memberCardsService: MemberCardsService) {}

  ngOnInit(): void {
    this.subscription = this.memberCardsService.getMemberCards().subscribe(value => {
      this.title = value.attributes.title;
      this.firstListOfMembershipCards = value.attributes.memberCards.first.block;
      this.secondListOfMembershipCards = value.attributes.memberCards.second.block;
      this.thirdListOfMembershipCards = value.attributes.memberCards.third.block;
      this.firstListOfMembershipCardsImageUrl = value.attributes.memberCards.first.imageUrl.w200;
      this.secondListOfMembershipCardsImageUrl = value.attributes.memberCards.second.imageUrl.w200;
      this.thirdListOfMembershipCardsImageUrl = value.attributes.memberCards.third.imageUrl.w200;
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
}
}
