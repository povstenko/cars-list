import { Location, LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
})
export class CarEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private location: Location,
    private router: Router
  ) {}
  car: Car;

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.carsService.getCar(id).subscribe((car) => {
      this.car = car;
    });
  }
  onBack() {
    this.location.back();
  }
  onSubmit(myForm: NgForm) {
    console.log(myForm);
    let id = this.car.id;
    let name = myForm.value.name;
    let model = myForm.value.model;
    let price = myForm.value.price;

    if (myForm.valid) {
      this.carsService.updateCar(id, name, model, price).subscribe(
        () => {
          this.router.navigate(['/auth/maintenance']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
