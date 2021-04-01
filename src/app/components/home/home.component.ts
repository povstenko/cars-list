import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private carsService: CarsService, private router: Router) { }
  cars: Car[] = [];

  ngOnInit(): void {
    this.carsService.getCars().subscribe((data) => {
      this.cars = data;
    })
  }

}
