import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-carform',
  templateUrl: './carform.component.html',
  styleUrls: ['./carform.component.css']
})
export class CarformComponent implements OnInit {
  formCar: Car = new Car();

  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.newCarForm();
  }

  newCarForm(): void {
    this.formCar = new Car();
  }

  postCar(): void {
    const data = this.formCar;
    this.carService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }
}
