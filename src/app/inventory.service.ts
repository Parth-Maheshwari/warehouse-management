import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { inventory } from './interfaces/inventory';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private data = [];
  public behaviorsubject = new BehaviorSubject<inventory[]>(this.data);
  constructor(private httpclient: HttpClient) {
    this.load();
  }

  public url = "http://localhost:3000/inventory";

  load() {
    this.httpclient.get<inventory[]>(this.url).subscribe(
      data => {
        this.behaviorsubject.next(data);
      }
    )
  }
}
