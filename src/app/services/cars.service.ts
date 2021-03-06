import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getCar(id): Observable<Car> {
    return this.http.get(`${this.url}/${id}`) as Observable<Car>;
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  updateCar(id: number, name: string, model: string, price: number) {
    return this.http.put(
      `${this.url}/${id}`,
      {
        id: '',
        name: name,
        model: model,
        price: price,
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  addCar(name: string, model: string, price: number): Observable<any> {
    return this.http.post(
      this.url,
      {
        id: '',
        name: name,
        model: model,
        price: price,
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }
}
