import { Component, OnInit } from '@angular/core';
import { Car } from '../../car.model';
import { CarsService } from '../../services/cars.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-caredit',
  templateUrl: './caredit.component.html',
  styleUrls: ['./caredit.component.css']
})
export class CareditComponent implements OnInit {
  formCar: Car = new Car();

  constructor(private carService: CarsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.newCarForm();
    this.getCarData(this.route.snapshot.paramMap.get('id'));
  }

  getCarData(id: any) {
    this.carService.getById(id).subscribe({
      next: (data) => {
        this.formCar = data;
      }
    });
  }

  updateCar(): void {
    const data = this.formCar;
    this.carService.update(this.formCar.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/carslist']);
        },
        error: (e) => console.error(e)
      });
  }

  newCarForm(): void {
    this.formCar = new Car();
  }
}
