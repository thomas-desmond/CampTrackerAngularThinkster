import { Component, OnInit } from '@angular/core';
import { Camp } from '../shared/models/camp.model';
import { CampService } from '../camp.service';

@Component({
  selector: 'app-add-or-update-camp',
  templateUrl: './add-or-update-camp.component.html',
  styleUrls: ['./add-or-update-camp.component.css']
})
export class AddOrUpdateCampComponent implements OnInit {

  public newCamp: Camp = new Camp();

  constructor(private campService: CampService) { }

  ngOnInit() {
  }

  addOrUpdateCampRecord() {
    if(this.newCamp.id) {
      this.campService.update(this.newCamp);
    } else {
      this.campService.add(this.newCamp);
    }
  }
}