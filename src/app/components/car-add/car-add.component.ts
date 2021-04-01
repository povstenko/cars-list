import { DOCUMENT, Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private carsService: CarsService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onBack() {
    this.location.back();
  }
  onSubmit(myForm: NgForm) {
    console.log(myForm);
    let name = myForm.value.name;
    let model = myForm.value.model;
    let price = myForm.value.price;

    if (myForm.valid) {
      this.carsService.addCar(name, model, price).subscribe(
        () => {
          this._document.defaultView.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
