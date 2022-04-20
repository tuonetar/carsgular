import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-carspecs',
  templateUrl: './carspecs.component.html',
  styleUrls: ['./carspecs.component.css']
})
export class CarspecsComponent implements OnInit {
  showable: boolean = false;
  /*
    id?:             number;
    title?:          string;
    address?:        string;
    brand?:          string;
    model?:          string;
    model_year?:     number;
    // maybe issuance set a date ?
    issuance?:       string;
    mileage?:        number;
    // as enum ?
    fuel?:           string;
    // as enum ?
    color?:          string;
    number_doors?:   number;
    horse_power?:    number;
    price?:          number;
    picture?:        string[];
    sold?:           boolean;
  */

  @Input() carId : any;
 
  specedCar?: Car = new Car();
  formCar?:   Car = new Car();

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    console.log("A lot of stuff being intialized")
    this.getCarData(this.carId);
    this.newCarForm();
  }

  newCarForm(): void {
    this.formCar = this.specedCar;
  }

  deleteCar(): void {

  }
  
  getCarData(id: number) {
    this.carsService.getById(id).subscribe({
      next: (data) => {
        this.specedCar = data;
        console.log(data);
      }
    });   
  }

}
