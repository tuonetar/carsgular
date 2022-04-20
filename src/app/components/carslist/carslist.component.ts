import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/car.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-carslist',
  templateUrl: './carslist.component.html',
  styleUrls: ['./carslist.component.css']
})
export class CarslistComponent implements OnInit {

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
