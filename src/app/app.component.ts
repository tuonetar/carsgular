import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/car.model';
import { CarsService } from 'src/app/services/cars.service';
import { PricerankerPipe } from './pipes/priceranker.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'carsgular';

  valueDate = "Date";

  order = "DESC";
  orderValue = "Prix";
  queryString = "";
  pricemin = 0;
  pricemax = 1000000;

  carsList: Car[] = [];

  constructor(private carsService: CarsService) {}

  getAllCarsData() {
    this.carsService.getAll().subscribe({
      next: (data) => {
        this.carsList = data;
        console.log("DATA into CARS (CarsService used)")
        console.log(data);
      },
      error : (e) => console.log(e)
    });
  }

  ngOnInit(): void {
    console.log("A lot of stuff being intialized")
    this.getAllCarsData();
  }

  toggleCarData(c: Car): void {
    c.shown = !c.shown;
  }

  deleteCar(c: Car): void {
    if (c.id === undefined)
      return;
    this.carsService.delete(c.id)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
    this.getAllCarsData();
  }
}
