import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  url = 'http://localhost:3000/cars';
  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get(this.url) as Observable<Car[]>;

  }
  getCar(id): Observable<Car>{
    return this.http.get(this.url + '/' + id) as Observable<Car>
  }
  deleteCar(id: number) {
    //
  }
  updateCar() {
    //
  }
}
