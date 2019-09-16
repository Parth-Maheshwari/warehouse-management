import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { inventory } from './interfaces/inventory';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import { tap } from "rxjs/operators";

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
    return this.httpclient.get<inventory[]>(this.url)
    .subscribe(
      data => {
        this.behaviorsubject.next(data);
      }
    )
  }

  save(product: inventory): Observable<inventory>{
    return this.httpclient.post<inventory>(this.url , product, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }) 
    })
    .pipe(
      tap((data : any)=> {
        this.data.push(data);
        this.behaviorsubject.next(this.data);
      })
    );
  }

  update(product: inventory): Observable<inventory>{
    console.log("in update");
    return this.httpclient.put<inventory>(`${this.url}/${product.id}` , product, {
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(
      tap((data : any)=> {
        this.data.push(data);
        this.behaviorsubject.next(this.data);
      })
    );
  }
}
