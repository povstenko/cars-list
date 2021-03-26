import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-maintenence',
  templateUrl: './maintenence.component.html',
  styleUrls: ['./maintenence.component.css']
})
export class MaintenenceComponent implements OnInit {

  constructor(private carsService: CarsService, private router: Router) { }
  cars: Car[] = [];

  ngOnInit(): void {
      this.carsService.getCars().subscribe(() => {
        console.log(this.cars);
    });
  }

  showCarDetails(id) {
    this.router.navigate(['/auth/car-details', id])
  }

}
