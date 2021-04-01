import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarsService } from 'src/app/services/cars.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private carsService: CarsService, private router: Router, private userService: UserService) { }
  cars: Car[] = [];
  username = "name";

  ngOnInit(): void {
    this.carsService.getCars().subscribe((data) => {
      this.cars = data;
    })
    this.username = this.userService.currentUser['login'];
  }

}
