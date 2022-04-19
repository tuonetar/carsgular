import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

import {Car} from "../car.model";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  apiURL = 'http://localhost:3000/cars'

  constructor(private http: HttpClient) { }

  // With unitary tests

  // Tested
  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiURL);
  }

  getById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiURL}/${id}`)
  }

  // Yet to be tested
  create(data: Car): Observable<Car> {
    return this.http.post(this.apiURL, data);
  }
  update(id: number, data: Car): Observable<Car> {
    return this.http.put(`${this.apiURL}/${id}`, data);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  deleteAll(): Observable<Car> {
    return this.http.delete(this.apiURL);
  }

}
