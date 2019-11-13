import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
  dateJour()
     {
      let x: Date = new Date();  
       return x; }

}
