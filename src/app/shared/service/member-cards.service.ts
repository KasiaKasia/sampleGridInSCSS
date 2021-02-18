import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MemberCardsService {

  constructor(private httpClient: HttpClient) { }

  public getMemberCards(): Observable<any> {
    return this.httpClient.get<any>(`https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json`).pipe(
      map(res => <any[]> res.data[0])
    );
  }
}
