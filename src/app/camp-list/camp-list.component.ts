import { Component, OnInit } from '@angular/core';
import { CampService } from '../camp.service';
import { Camp } from '../shared/models/camp.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-camp-list',
  templateUrl: './camp-list.component.html',
  styleUrls: ['./camp-list.component.css']
})
export class CampListComponent implements OnInit {

  public campList$: Observable<Camp[]>;

  constructor(private campService: CampService) {
    this.campList$ = this.campService.campBehaviorSubject.asObservable();
  }

  ngOnInit() {
  }

}
