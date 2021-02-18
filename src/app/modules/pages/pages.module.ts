import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberCardsService } from 'src/app/shared/service/member-cards.service';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule
  ], 
  providers: [MemberCardsService],
  exports: [HomeComponent]
})
export class PagesModule { }
