import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    this.httpClient.get<Camp[]>('https://localhost:44316/api/camps')
      .pipe(
        catchError(error => {
          console.log('Error caught', error);
          return throwError(error);
        })
      )
      .subscribe(
        success => {
          console.log('Success case called');
          this.campBehaviorSubject.next(success)
        },
        error => console.log('Error in subscribe', error),
        () => console.log('Subscribe complete')
      );
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

  public remove(campIdToDelete: number) {
    this.httpClient.delete('https://localhost:44316/api/camps' + '/' + campIdToDelete).subscribe(() => {
      let newCampList = this.campBehaviorSubject.getValue().filter(camp => camp.id !== campIdToDelete);
      this.campBehaviorSubject.next(newCampList);
    })
  }
}
