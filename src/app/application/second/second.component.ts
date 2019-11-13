import { Component, OnInit } from '@angular/core';
import {DateService} from '../date.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  
  laDate: date;
  constructor(private service:DateService) {}
 ngOnInit() {
  // Récupération de la date à partir du service
  this.laDate = this.service.dateJour();
  }

}
