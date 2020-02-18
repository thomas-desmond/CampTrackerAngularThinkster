import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Camp } from './shared/models/camp.model';

@Injectable({
  providedIn: 'root'
})
export class CampService {

  public campBehaviorSubject = new BehaviorSubject<Camp[]>([]);

  constructor(private httpClient: HttpClient) { 
    this.get();
  }

  public get() {
    this.httpClient.get<Camp[]>('https://localhost:44316/api/camps').subscribe((responseData =>
    {
      this.campBehaviorSubject.next(responseData);
    }));
  }

  public add(campToAdd: Camp) {
    return this.httpClient.post<Camp[]>('https://localhost:44316/api/camps', campToAdd)
      .subscribe(response => {
        this.campBehaviorSubject.next(this.campBehaviorSubject.getValue().concat(response));
      });
  }

  public update(updatedCamp: Camp) {
    return this.httpClient.put<Camp>('https://localhost:44316/api/camps' + '/' + updatedCamp.id, 
      updatedCamp).subscribe( response => {
        let currentData = this.campBehaviorSubject.getValue();
        const index = currentData.findIndex(camp => camp.id == updatedCamp.id);
        currentData[index] = updatedCamp;
        this.campBehaviorSubject.next(currentData);
    },
    (error) => {
      console.log("Error", error);
    }
    )
  }
}
