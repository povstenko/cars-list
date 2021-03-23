import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-maintenence',
  templateUrl: './maintenence.component.html',
  styleUrls: ['./maintenence.component.css']
})
export class MaintenenceComponent implements OnInit {

  constructor(private carsService: CarsService) { }
  cars: Car[] = [];

  ngOnInit(): void {
    this.carsService.getCars().subscribe(() => {

    });
  }

}
