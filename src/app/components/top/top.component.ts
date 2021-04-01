import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarsService } from 'src/app/services/cars.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(private carsService: CarsService, private router: Router, private userService: UserService) { }
  cars: Car[] = [];

  ngOnInit(): void {
    this.carsService.getCars().subscribe((data) => {
      this.cars = data;
    })
  }
}
